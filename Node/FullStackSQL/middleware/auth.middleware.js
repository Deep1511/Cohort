import jwt from "jsonwebtoken"

const isLoggedIn = async (req, res, next) => {
    
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Authentication failed",
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    
    req.user = decodedToken
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export default isLoggedIn
