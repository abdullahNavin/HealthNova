import { NextFunction, Request, Response } from "express";
import z, { ZodObject } from "zod";

export const validateRequest = (zodSchema: ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {

        const validatedData = zodSchema.safeParse(req.body);

        if (!validatedData.success) {
            next(validatedData.error)
        }
        // senitize request 
        req.body = validatedData.data
        next()
    }
}