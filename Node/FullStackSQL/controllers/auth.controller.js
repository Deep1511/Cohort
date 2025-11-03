import bcrypt from "bcryptjs";
import crypto from "crypto";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
const prisma = new PrismaClient();

export const registerUser = async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password || !phone) {
    console.log("Data is missing");
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    //hash the pass
    const hashedPass = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPass,
        verificationToken,
      },
    });
    console.log(user);
    // send mail
    // send token as email to user
    var transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
    console.log(transporter);
    const mailOption = {
      from: process.env.MAILTRAP_SENDER,
      to: user.email,
      subject: "Verify your email",
      text: `Please click on the following link:
    ${process.env.BASE_URL}/api/v1/users/verify/${verificationToken}
    `, // plain‑text body
      // html: "<b>Hello world?</b>",
    };
    console.log(mailOption);

    await transporter.sendMail(mailOption);

    return res.status(200).json({
      success: true,
      message: "User register successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
      message: "Registration false",
    });
  }
};

export const verifyUser = async (req, res) => {
  const { token } = req.params;

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Invalid token",
    });
  }
  try {
    const user = await prisma.user.findFirst({
      where: { verificationToken: token },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid token",
      });
    }
    // user.isVerified = true;
    // user.verificationToken = undefined

    const updateUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        verificationToken: null,
      },
    });

    res.status(200).json({
      success: true,
      message: "User verified successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Verification failed",
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All field are required",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email password",
      });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Please Verify user first",
      });
    }
    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(400).json({
        success: false,
        message: "Invalid email password",
      });
    }

    const jwtToken = jwt.sign(
      {
        id: user.id,
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
    res.cookie("token", jwtToken, cookieOptions);

    res.status(200).json({
      success: true,
      message: "User login successfully",
      token: jwtToken,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Login failed",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isVerified: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User data retrieved successfully",
      user,
    });
  } catch (error) {
    console.error("GetMe Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0), // expires immediately
    //   secure: process.env.NODE_ENV === "production", // recommended for production
    //   sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while logging out",
    });
  }
};

