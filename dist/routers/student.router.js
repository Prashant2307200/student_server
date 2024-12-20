import { Router } from "express";
import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import { StudentController } from "../controllers/student.controller.js";
import { StudentService } from "../services/student.service.js";
const router = Router();
const studentService = new StudentService();
const studentController = new StudentController(studentService);
router
    .route('/')
    .get(asyncHandler(studentController.getAllStudents.bind(studentController)))
    .post(asyncHandler(studentController.createStudent.bind(studentController)));
export default router;
