import ExpressError from "../utils/ExpressError.util.js";
export class StudentController {
    studentService;
    constructor(studentService) {
        this.studentService = studentService;
    }
    async getAllStudents(req, res, next) {
        try {
            const students = await this.studentService.getAllStudents();
            res.status(200).json(students);
        }
        catch (error) {
            next(new ExpressError("Error fetching students", 500));
        }
    }
    async createStudent(req, res, next) {
        try {
            const studentData = req.body;
            const newStudent = await this.studentService.createStudent(studentData);
            res.status(201).json(newStudent);
        }
        catch (error) {
            next(new ExpressError("Error creating student", 500));
        }
    }
}
