import { Students} from '../../Students/transformed/students.model';

export interface Parents {

    email: string,
    password: string,
    childs: Students[]
}