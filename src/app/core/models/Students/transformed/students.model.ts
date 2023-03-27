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

/* La interfaz Students define la estructura que deben tener los objetos que representan estudiantes en la aplicación , cada una con un tipo específico. Esto permite que el código que utiliza estos estudiantes pueda trabajar con objetos que siguen esta estructura predefinida. 
id: identificador único del estudiante.
name: nombre completo del estudiante.
image: URL de la imagen del estudiante.
phone: número de teléfono del estudiante.
address: dirección del estudiante.
email: dirección de correo electrónico del estudiante.
date: fecha de nacimiento del estudiante.
areas: áreas de interés del estudiante.
tutor: información del padre o tutor del estudiante.
diseases: lista de enfermedades o condiciones médicas del estudiante.
nutrition: información de nutrición del estudiante.
grade: grado o nivel educativo del estudiante.
Es un Interface transformado de ApiStudents quitando las propiedades menos relevantes
*/