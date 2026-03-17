import { Speciality } from "../../../generated/prisma/client";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";
import { DoctorPayload } from "./user.interface";

const createDoctor = async (payload: DoctorPayload) => {
    const specialites: Speciality[] = []

    for (const specialityId of payload.specialties) {
        const speciality = await prisma.speciality.findUnique({
            where: {
                id: specialityId
            }
        })
        if (!speciality) {
            throw new Error(`speciality with id ${specialityId} not found`)
        }
        specialites.push(speciality)
    }

    const userExist = await prisma.user.findUnique({
        where: {
            email: payload.doctor.email
        }
    })

    if (userExist) {
        throw new Error(`user with this email ${payload.doctor.email} already exist`)
    }

    const userData = await auth.api.signUpEmail({
        body: {
            name: payload.doctor.name,
            email: payload.doctor.email,
            password: payload.password,
            role: Role.DOCTOR,
            needPasswordChange: true
        }
    })

    try {
        const result = await prisma.$transaction(async (tx) => {
            const doctorData = await tx.doctor.create({
                data: {
                    userId: userData.user.id,
                    ...payload.doctor
                }
            })
            const doctorSpeciality = specialites.map(speciality => {
                return {
                    doctorId: doctorData.id,
                    specialtyId: speciality.id
                }
            })

            const doctorSpecialityData = await tx.doctorSpecialty.createMany({
                data: doctorSpeciality
            })

            const doctor = await tx.doctor.findUnique({
                where: {
                    id: doctorData.id
                },
                include: {
                    user: true,
                    specialties: true
                }
            })
            return doctor;
        })
        return result;

    } catch (error) {
        await prisma.user.delete({
            where: {
                id: userData.user.id
            }
        })
        throw error
    }
}

export const userService = {
    createDoctor
}