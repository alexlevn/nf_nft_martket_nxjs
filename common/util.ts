import { AxiosResponse } from "axios"

export const getResponseData = <T>(response: AxiosResponse<{
  payload: any
}>) => {
  return response.data.payload
}