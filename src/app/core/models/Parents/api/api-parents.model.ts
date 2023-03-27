import { ApiStudents} from '../../Students/api/api-students.model';

export interface ApiParents {
    _id?: string,
    email: string,
    password: string,
    childs: ApiStudents[],
    __v?: string,
    createdAt?: string,
    updatedAt?: string
}
 /*La interfaz ApiParents define la estructura que deben tener los objetos que representan padres en una aplicación , cada una con un tipo específico. Esto permite que el código que utiliza estos padres pueda trabajar con objetos que siguen esta estructura predefinida.
 
 _id (opcional): un identificador único para el padre.
email: el correo electrónico del padre.
password: la contraseña del padre.
childs: un array de objetos de tipo ApiStudents que representan a los hijos del padre.
__v (opcional): la versión del esquema de datos.
createdAt (opcional): la fecha de creación del objeto.
updatedAt (opcional): la fecha de actualización del objeto.
*/
