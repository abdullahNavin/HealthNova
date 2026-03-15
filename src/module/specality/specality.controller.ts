import { NextFunction, Request, RequestHandler, Response } from "express";
import { SpecalityService } from "./specality.service";
import { catchAsync } from "../../shared/catchAsync";


const createSpecality = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body
        const result = await SpecalityService.createSpecality(payload)
        res.status(200).json({
            success: true,
            data: result
        })
    }
)

const getAllSpecalities = catchAsync(
    async (req: Request, res: Response) => {
        const result = await SpecalityService.getAllSpecalities()
        res.status(200).json({
            success: true,
            data: result
        })
    }
)

const deleteSpecality = catchAsync(
    async (req: Request, res: Response) => {
        const id = req.params.id as string
        const result = await SpecalityService.deleteSpecality(id)
        res.status(200).json({
            success: true,
            data: result
        })
    }
)

const updatedSpecality = catchAsync(
    async (req: Request, res: Response) => {
        const id = req.params.id as string
        const payload = req.body
        const result = await SpecalityService.updatedSpecality(id, payload)
        res.status(200).json({
            success: true,
            data: result
        })
    }
)


export const SpecalityController = {
    createSpecality,
    getAllSpecalities,
    deleteSpecality,
    updatedSpecality
}