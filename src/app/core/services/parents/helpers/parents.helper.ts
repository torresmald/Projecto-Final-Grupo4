import { ApiParents } from "src/app/core/models/Parents/api/api-parents.model";
import { Parents } from "src/app/core/models/Parents/transformed/parents.model";


export function transformDataParents(parent: ApiParents): Parents {
    delete parent.__v
    delete parent.createdAt;
    delete parent.updatedAt;
    return parent;
}
/* Este es un archivo que exporta una función llamada transformDataParents, que acepta un objeto de tipo ApiParents , la función elimina las propiedades __v, createdAt y updatedAt del objeto original de ApiParents y devuelve el objeto transformado. */