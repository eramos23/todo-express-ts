import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import { BaseResponseDto } from '../controller/base-response-dto'
import { logger } from '../logger'

export const errorHandler = () => {
  return (err: any, _req: Request, res: Response, _next: NextFunction) => {
    logger.error(err.stack)
    let messageError = err.toString()
    
    const responseErrorDto: BaseResponseDto<string> = {
      isSuccess: false,
      httpStatus: httpStatus.INTERNAL_SERVER_ERROR,
      error: messageError
    }
    res.type('application/json')
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(responseErrorDto)
  }
}
