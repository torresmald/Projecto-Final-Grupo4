import { ResourcesType } from "../resources.types";

export interface Resources {
    _id?: string,
    title: string,
    description: string,
    link: string,
    type: ResourcesType
}