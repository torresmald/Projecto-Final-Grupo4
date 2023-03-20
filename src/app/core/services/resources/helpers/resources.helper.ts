import { ApiResources } from "src/app/core/models/Resources/api/api-resources.model";
import { Resources } from "src/app/core/models/Resources/transformed/resources.model";


export function transformDataResources(resource: ApiResources): Resources {
    delete resource.__v
    delete resource.createdAt;
    delete resource.updatedAt;
    return resource;
}