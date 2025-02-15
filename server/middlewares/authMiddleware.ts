import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  contact?: any;
}

const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    if (decoded) 
      next();
    else 
        res.status(400).json({ message: "JWT decoding failed. " });

  } catch (err) {
    res.status(400).json({ message: "Invalid token." });
  }
};

export default authMiddleware;
