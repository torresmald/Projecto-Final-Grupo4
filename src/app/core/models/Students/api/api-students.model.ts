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
/* La interfaz ApiStudents define la estructura que deben tener los objetos que representan estudiantes en la aplicación , cada una con un tipo específico. Esto permite que el código que utiliza estos estudiantes pueda trabajar con objetos que siguen esta estructura predefinida.
id: opcional y de tipo string, que es el ID único del estudiante.
id: obligatorio y de tipo string, que es el ID del estudiante.
name: obligatorio y de tipo string, que es el nombre del estudiante.
image: obligatorio y de tipo string, que es la URL de la imagen del estudiante.
phone: obligatorio y de tipo number, que es el número de teléfono del estudiante.
address: obligatorio y de tipo string, que es la dirección del estudiante.
email: obligatorio y de tipo string, que es el correo electrónico del estudiante.
date: obligatorio y de tipo string, que es la fecha de nacimiento del estudiante.
areas: obligatorio y de tipo string array, que son las áreas de interés del estudiante.
tutor: obligatorio y de tipo ApiParents array, que es un array de los padres o tutores del estudiante.
diseases: obligatorio y de tipo string array, que son las enfermedades del estudiante.
nutrition: obligatorio y de tipo string array, que son los datos de nutrición del estudiante.
grade: obligatorio y de tipo string array, que son las calificaciones del estudiante.
__v: opcional y de tipo number, que es la versión del esquema del estudiante.
createdAt: opcional y de tipo string, que es la fecha de creación del estudiante.
updatedAt: opcional y de tipo string, que es la fecha de actualización del estudiante.
 */