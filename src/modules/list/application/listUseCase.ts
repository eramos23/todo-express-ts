import { ListRepository } from "../domain/list.repositoy";
import { ListValue } from "../domain/list.value";
import { RegisterListDto } from "./dto/registe.dto";
export class ListUseCase {
    constructor(private readonly listRepository: ListRepository){

    }

    public registerList = async(dto: RegisterListDto) =>{
        const userValue = new ListValue({title: dto.title as string, description: dto.description as string, items: dto.items})
        const userCreated = await this.listRepository.registerList(userValue)
        return userCreated;
    }

    public findListById = async(id: string) => {
        const list = await this.listRepository.findListById(id)
        return list
    }

    public findAll = async () => {
        const list = await this.listRepository.findAll()
        return list
    }

}