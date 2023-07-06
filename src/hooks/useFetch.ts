import { AxiosRequestConfig } from "axios"
import { useState, useEffect } from "react"
import { WebClient as client } from "../services/webclient/axiosConfig"

export function useFetch<T = unknown>(endPoint: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        client().get(endPoint, options)
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    return { data, error, isLoading }
}