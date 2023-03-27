import { Students} from '../../Students/transformed/students.model';

export interface Parents {

    email: string,
    password: string,
    childs: Students[]
}
/* La interfaz Parents define la estructura que deben tener los objetos que representan padres en una aplicación , cada una con un tipo específico. Esto permite que el código que utiliza estos padres pueda trabajar con objetos que siguen esta estructura predefinida. 
email: una cadena de texto que representa el correo electrónico del padre.
password: una cadena de texto que representa la contraseña del padre.
childs: un arreglo de objetos Students, que representa los hijos del padre.
Es un Interface transformado de ApiParents quitando las propiedades menos relevantes
*/