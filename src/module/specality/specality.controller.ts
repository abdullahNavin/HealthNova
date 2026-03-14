import { Request, Response } from "express";
import { SpecalityService } from "./specality.service";

const createSpecality = async (req: Request, res: Response) => {
    try {
        const payload = req.body
        const result = await SpecalityService.createSpecality(payload)
        res.status(201).json({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating specality"
        })
    }
}

export const SpecalityController = {
    createSpecality
}