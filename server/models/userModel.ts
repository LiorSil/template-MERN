import { model, Schema } from "mongoose";
import { IUser } from "./interfaces/IUser";
import bcrypt from "bcrypt";


const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = model<IUser>("User", userSchema, "users");
export default User;



