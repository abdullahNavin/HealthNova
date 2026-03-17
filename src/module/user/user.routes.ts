import { Router } from "express";
import { userController } from "./user.controller";

const router: Router = Router()

router.post("/create-doctor", userController.createDoctor)

export const userRoutes = router