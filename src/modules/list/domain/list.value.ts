import { v4 as uuid } from "uuid"
import { ListEntity } from "./list.entity";

export class ListValue implements ListEntity {
    uuid: string;
    title: string;
    description: string;
    items: [];
    isDeleted: boolean;

    constructor({title, description, items}: {title: string, description?: string, items: []}) {
        this.uuid = uuid()
        this.title = title;
        this.description = description ?? 'default description'
        this.items = items
        this.isDeleted = false
    }   
}