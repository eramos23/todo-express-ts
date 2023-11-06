import httpContext from 'express-http-context'
import winston from 'winston'

import config from '../../env'
import { REQUEST_ID_CONTEXT } from '../../../domain/common/constants'
const { combine, timestamp, json, errors } = winston.format

const requestId = winston.format((info, _opts) => {
    info.idTransaction = httpContext.get(REQUEST_ID_CONTEXT)
    return info
})

export const logger = winston.createLogger({
    levels: winston.config.npm.levels,
    level: config.get('log.level'),
    format: combine(
        requestId(),
        errors({ stack: true }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        json()
    ),
    defaultMeta: {
      serviceName: config.get('app.name'),
      version: config.get('app.version')
    },
    transports: [
        new winston.transports.Console()
    ]
})