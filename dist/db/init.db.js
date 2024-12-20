import { studentData } from "./sampleStudentData.db.js";
import { prisma } from "../config/db.config.js";
export const initDB = async () => {
    await prisma.user.createMany({
        data: studentData,
    });
};
