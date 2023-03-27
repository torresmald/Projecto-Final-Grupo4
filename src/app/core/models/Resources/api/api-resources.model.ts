import { ResourcesType } from "../resources.types";

export interface ApiResources {
    _id?: string,
    title: string,
    description: string,
    link: string,
    type: ResourcesType,
    buy: string,
    __v?: string,
    createdAt?: string,
    updatedAt?: string
}
/* La interfaz ApiResources define la estructura que deben tener los objetos que representan recursos en la aplicación , cada una con un tipo específico. Esto permite que el código que utiliza estos recursos pueda trabajar con objetos que siguen esta estructura predefinida.

_id (opcional): una cadena que representa el ID único del recurso en la base de datos.
title: una cadena que representa el título del recurso.
description: una cadena que representa la descripción del recurso.
link: una cadena que representa el enlace del recurso.
type: un valor de tipo ResourcesType que representa el tipo de recurso.
buy: una cadena que representa si el recurso se puede comprar o no.
__v (opcional): una cadena que representa la versión del documento en la base de datos.
createdAt (opcional): una cadena que representa la fecha de creación del recurso.
updatedAt (opcional): una cadena que representa la fecha de actualización del recurso.

*/