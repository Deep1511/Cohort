import User from "../model/user.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const registerUser = async (req, res) => {
  // get data
  const { name, email, password } = req.body;

  // validate
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    // check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User alreay exists",
      });
    }

    // create a user in database
    const user = await User.create({
      name,
      email,
      password,
    });
    // console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    // create varification token
    const token = crypto.randomBytes(32).toString("hex");
    // console.log(token);

    // save token in databse
    user.verificationToken = token;

    await user.save();

    // send token as email to user
    var transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDER,
      to: user.email,
      subject: "Verify your email",
      text: `Please click on the following link:
    ${process.env.BASE_URL}/api/v1/users/verify/${token}
    `, // plain‑text body
      // html: "<b>Hello world?</b>",
    };

    await transporter.sendMail(mailOption);

    // send success status to user
    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: "User not registered",
      error,
      success: false,
    });
  }
};

const verifyUser = async (req, res) => {
  // get token from url
  const { token } = req.params;

  // validate token
  if (!token) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }

  // find user based on token
  const user = await User.findOne({ verificationToken: token });

  // if not
  if (!user) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }

  // set isVerified field to true
  user.isVarified = true;

  // remove verification token
  user.verificationToken = undefined;

  // save
  await user.save();

  // return response
  return res.status(200).json({
    message: "User verified successfully",
    success: true,
  });
};

const login = async (req, res) => {
  // console.log(req.body)
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All Fields are required",
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    // console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    if (!user.isVarified) {
      return res.status(400).json({
        message: "Please verify your email!!",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      success: true,
      message: "User login successfully",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
      },
    });
  } catch (error) {}
};

const getMe = async (req, res) => {
  try {
    // console.log("Reached at profile level")
    // const data = req.user
    // console.log(data)

    const user = await User.findById(req.user.id).select("-password");
    console.log(user);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {
      expries: new Date(0),
    });
    res.status(200).json({
      status: false,
      message: "Logged out successfully",
    });
  } catch (error) {}
};

const forgotPassword = async (req, res) => {
  try {
    // get email
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "email is required",
        success: false,
      });
    }
    // find user based on email

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found for this email",
        success: false,
      });
    }

    // reset token + reset expiry => Date.now() + 10*60*1000
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetExpiry = Date.now() + 10 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetExpiry;

    // user save
    await user.save({ validateBeforeSave: false });

    // send mail => desing url
    const resetURL = `${process.env.BASE_URL}/api/v1/users/reset/${resetToken}`;

    // send token as email to user
    var transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDER,
      to: user.email,
      subject: "Reset Password Mail",
      text: `Please click the link to reset your password: ${resetURL}`,
      html: `<p>Please click the link below to reset your password:</p>
             <a href="${resetURL}">${resetURL}</a>`,
    };

    await transporter.sendMail(mailOption);

    // send success status to user
    return res.status(200).json({
      message: "Forgot Password Successfully",
      success: true,
    });
  } catch (error) {}
};

const resetPassword = async (req, res) => {
  try {
    // collect token from params
    const { token } = req.params;
    // password from req.body
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        message: "Password is required",
        success: false,
      });
    }

    // find user
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired token",
        success: false,
      });
    }

    // set password in user
    user.password = password;

    // reset token, resetExpiry => Empty (reset)
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    
    // save user
    await user.save();

    return res.status(200).json({
       message: "Password reset successfully",
      success: true,
    });
  } catch (error) {
    console.error("Reset Password Error:", error);
    return res.status(500).json({
      message: "Error resetting password",
      success: false,
    });
  }
};

export {
  registerUser,
  verifyUser,
  login,
  getMe,
  logoutUser,
  forgotPassword,
  resetPassword,
};
