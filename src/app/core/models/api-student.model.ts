import { Parent } from './api-parents.model';

export interface student {


    id: string,
    name: string,
    image: string,
    phone: number,
    address: string,
    email: string,
    date: string,
    areas: string[],
    tutor: Parent[],
    diseases: string[],
    nutrition: string[],
    grade: string[],

}