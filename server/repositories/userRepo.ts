import User from "../models/userModel";
import { IUser } from "../models/interfaces/IUser";

 const createUser = async (user: IUser): Promise<IUser> => {
  const newUser = new User(user);
  return await newUser.save();
};

 const getUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

 const getUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id).exec();
};

 const updateUser = async (
  id: string,
  user: IUser
): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, user, { new: true });
};

 const deleteUser = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
};

export default { createUser, getUsers, getUserById, updateUser, deleteUser };