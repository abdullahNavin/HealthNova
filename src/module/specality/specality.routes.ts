import { Router } from "express";
import { SpecalityController } from "./specality.controller";

const router: Router = Router()

router.post("/create-specality", SpecalityController.createSpecality)
router.get("/all-specalities", SpecalityController.getAllSpecalities)
router.delete("/specality/:id", SpecalityController.deleteSpecality)
router.put("/specality/:id", SpecalityController.updatedSpecality)

export const SpecalityRoutes = router