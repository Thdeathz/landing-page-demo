declare type ResponseStatus = 'success' | 'fail'

declare interface ApiResponse<T> {
  status: ResponseStatus
  message: string
  data: T
}
