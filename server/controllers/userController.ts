import { Request, Response } from "express";
import userService from "../services/userService";


const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.getUserByIdService(req.params.id);
    res.status(200).json(user);
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
}

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getUserService();
    res.status(200).json(users);
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
}

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.createUserService(req.body);
    res.status(201).json(user);
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
}

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.updateUserService(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
}

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.deleteUserService(req.params.id);
    res.status(200).json(user);
  } catch (error : any) {
    res.status(500).json({ message: error.message });
  }
}

export default { getUserById, getUsers, createUser, updateUser, deleteUser };