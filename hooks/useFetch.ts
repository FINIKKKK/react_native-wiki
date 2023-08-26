import React from 'react';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

interface RequestData<T> {
    data: T;
}

/**
 * Хук для запросов
 */
export const useFetch = <T>(
    url: string,
    options?: AxiosRequestConfig
) => {
    const [data, setData] = React.useState<T | null>(null);
    const [errors, setErrors] = React.useState<any | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    (async function fetchData() {
        setIsLoading(true);
        try {
            const axiosOptions: AxiosRequestConfig = {
                baseURL: "https://api.wiki.itl.systems", // Главный URL
                headers: {
                    'Content-Type': 'application/json',
                    // Authorization: `Bearer ${token}`,
                },
                method:
                    (options?.method as 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE') ||
                    'GET',
                ...options,
            };

            const response: AxiosResponse<RequestData<T>> = await axios(url, axiosOptions);
            setData(response.data.data);
        } catch (err: any) {
            if (err.response) {
                setErrors(err.response.data);
            } else {
                setErrors(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    })();


    // Конвертируем ошибки
    if (options?.method === 'POST' && errors && errors.data && errors.data.messages) {
        const messageArray: string[] = [];
        for (const key in errors.data.messages) {
            if (errors.data.messages.hasOwnProperty(key)) {
                messageArray.push(...errors.data.messages[key]);
            }
        }
        setErrors(messageArray);
    }

    // Возвращаем данные
    return {data, errors, isLoading};
};