import { prisma } from "../config/db.config.js";
import logger from "../config/pino.config.js";
export class StudentService {
    prisma = prisma;
    getAllStudents() {
        try {
            return this.prisma.user.findMany();
        }
        catch (error) {
            logger.error("Error fetching students: ", error);
            throw new Error("Failed to fetch students");
        }
    }
    createStudent(studentData) {
        try {
            return this.prisma.user.create({
                data: studentData
            });
        }
        catch (error) {
            logger.error("Error creating student: ", error);
            throw new Error("Failed to create student");
        }
    }
}
