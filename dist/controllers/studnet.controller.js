export class StudentController {
    studentService;
    constructor(studentService) {
        this.studentService = studentService;
    }
    static async getStudent(req, res) {
        const users = await prisma.user.findMany();
        res.json(users);
    }
}
