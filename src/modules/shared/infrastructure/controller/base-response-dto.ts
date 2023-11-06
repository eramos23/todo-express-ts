export interface BaseResponseDto<T> {
    traceId?: string
    isSuccess: boolean
    httpStatus: number
    error?: string
    value?: T
  }
  