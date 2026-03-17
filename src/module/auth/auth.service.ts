import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth"
import { prisma } from "../../lib/prisma";

interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    role?: Role;
}
const register = async (payload: RegisterPayload) => {
    const result = await auth.api.signUpEmail({
        body: {
            name: payload.name,
            email: payload.email,
            password: payload.password
        }
    })

    if (!result.user) {
        throw new Error("Failed to create user")
    }
    const patient = await prisma.$transaction(async (tx) => {
        const Presult = await tx.patient.create({
            data: {
                name: payload.name,
                email: payload.email,
                userId: result.user.id
            }
        })
        return Presult
    })
    return { ...result, patient };
}

const login = async (payload: { email: string, password: string }) => {
    const result = await auth.api.signInEmail({
        body: {
            email: payload.email,
            password: payload.password
        }
    })

    if (result.user.isDeleted) {
        throw new Error("user not exist")
    }

    return result;
}

export const authService = {
    register,
    login
}