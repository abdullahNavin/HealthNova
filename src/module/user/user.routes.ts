import { NextFunction, Request, Response, Router } from "express";
import { userController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createDoctorSchema } from "./user.validation";

const router: Router = Router()

router.post("/create-doctor", validateRequest(createDoctorSchema), userController.createDoctor)

export const userRoutes = router