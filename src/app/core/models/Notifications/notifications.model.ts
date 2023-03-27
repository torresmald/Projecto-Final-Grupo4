import { Students } from 'src/app/core/models/Students/transformed/students.model';


export interface Notifications {

    _id: string,
    name: string,
    date: string,
    calendar: string,
    readed: boolean,
    description: string,
    student: Students[],
    createdAt: string,
    updateAt: string,

}
/*La interfaz Notifications define la estructura que deben tener los objetos que representan notificaciones en una aplicación , cada una con un tipo específico. Esto permite que el código que utiliza estas notificaciones pueda trabajar con objetos que siguen esta estructura predefinida.
_id: una cadena de texto que representa el identificador único del padre (opcional).
email: una cadena de texto que representa el correo electrónico del padre.
password: una cadena de texto que representa la contraseña del padre.
childs: un arreglo de objetos ApiStudents que representan a los estudiantes que están asociados a este padre.
__v: una cadena de texto que representa la versión del modelo de datos utilizado (opcional).
createdAt: una cadena de texto que representa la fecha y hora de creación del objeto (opcional).
updatedAt: una cadena de texto que representa la fecha y hora de la última actualización del objeto (opcional).
*/
