// Import required modules
import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import cors from 'cors';
import userRoute from "./routes/userRoute";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 3000;
const app = express();

// dbConnect();

app.use(bodyParser.json());
app.use(cors()); // Ensure cors is called as a function
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
