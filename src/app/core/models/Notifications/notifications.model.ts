import { Students } from 'src/app/core/models/Students/transformed/students.model';


export interface Notifications {

    _id: string,
    name: string,
    date: string,
    description: string,
    student: Students,
    createdAt: string,
    updateAt: string,

}