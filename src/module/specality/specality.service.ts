import { Speciality } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const createSpecality = async (data: Speciality) => {
    const result = await prisma.speciality.create({
        data
    })
    return result
}

const getAllSpecalities = async () => {
    const result = await prisma.speciality.findMany()
    return result
}


const updatedSpecality = async (id: string, data: Partial<Speciality>) => {
    const result = await prisma.speciality.update({
        where: {
            id
        },
        data
    })
    return result
}

const deleteSpecality = async (id: string) => {
    const result = await prisma.speciality.delete({
        where: {
            id
        }
    })
    return result
}

export const SpecalityService = {
    createSpecality,
    getAllSpecalities,
    deleteSpecality,
    updatedSpecality
}