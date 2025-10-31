import jwt from "jsonwebtoken"

export const isLoggedIn = async (req, res, next) => {
  try {
    // get token from cookies
    console.log(req.cookies);

    let token = req.cookies?.token;

    console.log("Token found", token ? "YES" : "NO");

    if (!token) {
      console.log("No Token");
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }


    // verify token (check token)

    const decodedData = jwt.verify(token, process.env.JWT_SECRET)

    console.log("Decoded Data", decodedData);

    // get data from token
    req.user = decodedData

    next()
    
  } catch (error) {
    console.log("Auth Middleware failer");
    res.status(500).json({
        success:false,
        message: "Internal Server Error"
    })
  }

  // next();
};
