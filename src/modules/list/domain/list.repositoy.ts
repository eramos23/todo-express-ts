import { ListEntity } from "./list.entity";

export interface ListRepository {
    findListById(uuid:string): Promise<ListEntity | null>;
    registerList(list: ListEntity): Promise<ListEntity | null>;
    findAll(): Promise<ListEntity[] | null>;
}