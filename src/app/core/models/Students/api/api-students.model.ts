import { ApiParents } from '../../Parents/api/api-parents.model';

export interface ApiStudents {
    _id?: string,
    id: string,
    name: string,
    image: string,
    phone: number,
    address: string,
    email: string,
    date: string,
    areas: string[],
    tutor: ApiParents[],
    diseases: string[],
    nutrition: string[],
    grade: string[],
    __v?: number,
    createdAt?: string,
    updatedAt?: string
}