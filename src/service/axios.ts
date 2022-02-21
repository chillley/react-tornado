import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import qs from 'qs'


const instance: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
});

type successfulType = string | number;

export interface ServerResponse {
    resultCode?: string,
    successful?: successfulType,
    error?: string,
    total?: number,
    rows?: Array<any>
    pages?: number,
    hint?: string,

    [key: string]: any
}

// request
instance.interceptors.request.use(function (config: AxiosRequestConfig) {
    return config
}, function (error): any {
    return Promise.reject(error)
})

// response
instance.interceptors.response.use(function (config: AxiosResponse) {
    return config
}, function (error): any {

    return Promise.reject(error)
})

// post
function post(url: string, data?: Record<string, any>, config?: AxiosRequestConfig, file?: boolean): Promise<ServerResponse> {
    return new Promise((resolve, reject) => {
        instance.post(url, file ? data : qs.stringify(data), config)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

// get
function get(url: string, config?: AxiosRequestConfig): Promise<ServerResponse> {
    return new Promise((resolve, reject) => {
        instance.get(url, config)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

export default {
    post,
    get
}
