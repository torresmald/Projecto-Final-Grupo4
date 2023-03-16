import { ApiStudents} from '../../Students/api/api-students.model';

export interface ApiParents {
    _id?: string,
    email: string,
    password: string,
    childs: ApiStudents[]
    __v?: string,
    createdAt?: string,
    updatedAt?: string
}