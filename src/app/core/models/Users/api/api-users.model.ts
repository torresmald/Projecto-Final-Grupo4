import { Parents } from "../../Parents/transformed/parents.model";

export interface ApiUsers {
    user: Parents,
    token: string
}

//Esta interfaz se utiliza para definir el formato de la respuesta de una solicitud de inicio de sesión que devuelve un objeto con un usuario y un token de autenticación.//