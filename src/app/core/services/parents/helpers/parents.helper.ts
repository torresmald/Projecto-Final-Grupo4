import { ApiParents } from "src/app/core/models/Parents/api/api-parents.model";
import { Parents } from "src/app/core/models/Parents/transformed/parents.model";


export function transformDataParents(parent: ApiParents): Parents {
    delete parent.__v
    delete parent.createdAt;
    delete parent.updatedAt;
    return parent;
}
