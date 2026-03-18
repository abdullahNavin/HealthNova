import z from "zod";
import { Gender } from "../../../generated/prisma/enums";

export const createDoctorSchema = z.object({
    password: z.string("password is required").min(6, "password must be at least 6 characters").max(20, "password must be less than 20 characters"),
    doctor: z.object({
        name: z.string("name is required"),
        email: z.email("invalid email address"),
        contactNumber: z.string().min(10, "contact number must be at least 10 characters").max(15, "contact number must be less than 15 characters"),
        address: z.string().optional(),
        registrationNumber: z.string("registration number is required"),
        experience: z.int("experience must be integer").nonnegative("experience must be a positive number").optional(),
        gender: z.enum([Gender.FEMALE, Gender.MALE, Gender.OTHER], "gender must be either male, female or other"),
        appointmentFee: z.number("appointment fee must be a number").nonnegative("appointment fee must be a positive number"),
        qualification: z.string("qualification is required"),
        currentWorkingPlace: z.string("current working place is required"),
        designation: z.string("designation is required")
    }),
    specialties: z.array(z.uuid(), "specialties must be an array of UUIDs").min(1, "at least one speciality is required")

})