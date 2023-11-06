import { loadControllers } from 'awilix-express'
import bodyParser from 'body-parser'
import express from 'express'
import * as http from 'http'
import dbInit from '../modules/shared/infrastructure/persistence/mongo/connection'
import config from "../modules/shared/infrastructure/env"
import { errorHandler } from '../modules/shared/infrastructure/error-handler'
import { logger } from '../modules/shared/infrastructure/logger'
import route from '../modules/list/infrastructure/router/list.route'

export class Server {
    private readonly port: string
    public readonly express: express.Express
    private httpServer?: http.Server

    constructor() {
        this.port = config.get('app.port')
        this.express = express()
        dbInit().then()
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({ extended: true }))
        this.express.use('/api', loadControllers(
            '../modules/*/infrastructure/controller/*.controller.{ts,js}',
            { cwd: __dirname }
        ))
        this.express.use(route)
        this.express.use(errorHandler())
    }

    listen (): void {
        this.httpServer = this.express.listen(this.port)
        logger.info(`ToDo Backend App is running at http://localhost:${this.port} `)
        logger.info('Press CTRL-C to stop\n')
    }
    stop (): void {
        if (this.httpServer != null) {
            this.httpServer.close()
        }
    }
}