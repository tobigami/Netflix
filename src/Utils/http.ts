import axios, { type AxiosInstance } from 'axios'
import { API_KEY, baseUrl } from 'src/Constant/url'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // request
    this.instance.interceptors.request.use(
      function (config) {
        config.params = { ...config.params, api_key: API_KEY }
        return config
      },
      function (error) {
        return Promise.reject(error)
      }
    )

    // response
    this.instance.interceptors.response.use(
      function (res) {
        return res
      },
      function (error) {
        return Promise.reject(error)
      }
    )
  }
}

export const http = new Http().instance
