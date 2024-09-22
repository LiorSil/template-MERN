import { IUser } from "../models/interfaces/IUser";
import   userRepo  from "../repositories/userRepo";



 const createUserService = async (user: IUser): Promise<IUser> => {
    return await userRepo.createUser(user);
    };

 const getUserService = async (): Promise<IUser[]> => { 
    return await userRepo.getUsers();
    };

 const getUserByIdService = async (id: string): Promise<IUser | null> => {    
    return await userRepo.getUserById(id);
    }

 const updateUserService = async (id: string, user: IUser): Promise<IUser | null> => {    
    return await userRepo.updateUser(id, user);
    }

 const deleteUserService = async (id: string): Promise<IUser | null> => {
    return await userRepo.deleteUser(id);
    }

    export default { createUserService, getUserService, getUserByIdService, updateUserService, deleteUserService };
 

