
import { ApiTeachers } from "src/app/core/models/Teachers/api/api-teachers.model";
import { Teachers } from "src/app/core/models/Teachers/transformed/teachers.model";


export function transformDataTeachers(teacher: ApiTeachers): Teachers {
    delete teacher.__v
    delete teacher.createdAt;
    delete teacher.updatedAt;
    return teacher;
}
