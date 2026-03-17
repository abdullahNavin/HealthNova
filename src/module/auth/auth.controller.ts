import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { authService } from "./auth.service";

const register = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;
        const result = await authService.register(payload)
        res.status(200).json({
            success: true,
            data: result
        })
    }
)

const login = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body
        const result = await authService.login(payload)

        res.status(200).json({
            success: true,
            data: result
        })
    }
)

export const authController = {
    register,
    login
}