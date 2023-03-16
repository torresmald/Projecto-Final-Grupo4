import { ApiStudents } from "src/app/core/models/Students/api/api-students.model";
import { Students } from "src/app/core/models/Students/transformed/students.model";

export function transformDataStudents(student: ApiStudents): Students {
    delete student._id
    delete student.createdAt;
    delete student.updatedAt;
    return student;
}
