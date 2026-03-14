import { Specality } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const createSpecality = async (data: Specality) => {
    const result = await prisma.specality.create({
        data
    })
    return result
}

export const SpecalityService = {
    createSpecality
}