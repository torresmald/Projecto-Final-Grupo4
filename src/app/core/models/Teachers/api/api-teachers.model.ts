

export interface ApiTeachers {
    _id?: string,
    email: string,
    password: string,
    name: string,
    phone: number,
    idCard: string,
    grade: string,
    __v?: number,
    createdAt?: string,
    updatedAt?: string
}
/* La interfaz ApiTeachers define la estructura que deben tener los objetos que representan profesores en la aplicación , cada una con un tipo específico. Esto permite que el código que utiliza estos profesores pueda trabajar con objetos que siguen esta estructura predefinida. 
_id (opcional): ID del maestro.
email: correo electrónico del maestro.
password: contraseña del maestro.
name: nombre del maestro.
phone: número de teléfono del maestro.
idCard: número de identificación del maestro.
grade: grado del maestro.
__v (opcional): versión de la instancia.
createdAt (opcional): fecha de creación de la instancia.
updatedAt (opcional): fecha de actualización de la instancia.
*/