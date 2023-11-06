import { Request, Response } from "express";
import { ListUseCase } from "../../application/listUseCase";

export class Listcontroller{
    constructor(private listUseCase:ListUseCase) {

    }

    public getController = async ({query}: Request, res: Response) => {
        const {uuid = ''} = query
        const list = await this.listUseCase.findListById(`${uuid}`)
        res.send({list})
    }
    public insertController = async({body}: Request, res: Response) =>{
        const list = await this.listUseCase.registerList(body)
        res.send(list)
    }
    public findAllController = async(_req: Request, res: Response) =>{
        const list = await this.listUseCase.findAll()
        res.send(list)
    }
}