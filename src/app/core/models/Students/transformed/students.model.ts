import { Parents } from '../../Parents/transformed/parents.model';

export interface Students {
    id: string,
    name: string,
    image: string,
    phone: number,
    address: string,
    email: string,
    date: string,
    areas: string[],
    tutor: Parents[],
    diseases: string[],
    nutrition: string[],
    grade: string[],
}

