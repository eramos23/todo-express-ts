import { Router } from "express";
import { MongoRepository } from "../repository/mongo.repository";
import { ListUseCase } from "../../application/listUseCase";
import { Listcontroller } from "../controller/list.controller";

const route = Router()

const mongoRepository = new MongoRepository()
const listUseCase = new ListUseCase(mongoRepository)
const listController = new Listcontroller(listUseCase)

route.post('/list', listController.insertController)
route.get('/list', listController.getController)
route.get('/list/all', listController.findAllController)
export default route