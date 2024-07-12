import axios, { AxiosStatic, CreateAxiosDefaults } from 'axios'
import EventBus from '@/utils/EventBus'

const baseURL = 'https://localhost:44356/'

const baseAPI = (url: string, options?: CreateAxiosDefaults) => {
    console.log('url', url)

    return axios.create({ url, ...options })
}

const authAPI = (url: string, options?: CreateAxiosDefaults) => {
    const instance = axios.create({
        url,
        ...options,
    })
    return instance
}

export const interceptors = (instance: AxiosStatic) => {
    instance.interceptors.request.use(
      (config) => {
        const token = ''
  
        config.headers.setAuthorization(token ? `bearer ${token}` : null)

        return config
      },
      (error) => Promise.reject(error.response)
    )
    return instance
  }

// 1. method
// 2. url
// 3. config
// 4. param

export const request = baseAPI(baseURL)
export const requestWithAuth = authAPI(baseURL)