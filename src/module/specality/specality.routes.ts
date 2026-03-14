import { Router } from "express";
import { SpecalityController } from "./specality.controller";

const router: Router = Router()

router.post("/create-specality", SpecalityController.createSpecality)

export const SpecalityRoutes = router