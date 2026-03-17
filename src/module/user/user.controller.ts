import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { userService } from "./user.service";

const createDoctor = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;
        const result = await userService.createDoctor(payload)
        res.status(201).json({
            success: true,
            data: result
        })
    }
)

export const userController = {
    createDoctor
}