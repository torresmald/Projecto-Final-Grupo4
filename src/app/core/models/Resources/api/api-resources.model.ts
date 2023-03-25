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