import { Specality } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const createSpecality = async (data: Specality) => {
    const result = await prisma.specality.create({
        data
    })
    return result
}

const getAllSpecalities = async () => {
    const result = await prisma.specality.findMany()
    return result
}


const updatedSpecality = async (id: string, data: Partial<Specality>) => {
    const result = await prisma.specality.update({
        where: {
            id
        },
        data
    })
    return result
}

const deleteSpecality = async (id: string) => {
    const result = await prisma.specality.delete({
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