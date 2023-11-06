import { ListEntity } from "../../domain/list.entity";
import { ListRepository } from "../../domain/list.repositoy";
import ListModel from "../model/list.shchema";

export class MongoRepository implements ListRepository {
    async findListById(uuid: string): Promise<any> {
        const list = await ListModel.findOne({'uuid': uuid})
        return list
    }
    async registerList(listIn: ListEntity): Promise<any> {
        const list = await ListModel.create(listIn)
        return list
    }
    async findAll(): Promise<any> {
        const list = await ListModel.find()
        return list
    }
    
}