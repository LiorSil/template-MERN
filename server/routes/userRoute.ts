import { Router } from "express";
import userController from "../controllers/userController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();
router.get("/users/:id",authMiddleware, userController.getUserById);
router.get("/users", authMiddleware, userController.getUsers);
router.post("/users", authMiddleware, userController.createUser);
router.put("/users/:id", authMiddleware, userController.updateUser);
router.delete("/users/:id", authMiddleware, userController.deleteUser);

export default router;
