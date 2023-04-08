import { useState, useEffect } from 'react';
import React from 'react';

interface IAmResponse<T> {
    data: T | undefined,
    isLoading: Boolean,
    isError?: string
}
export const useFetchData = <T>(url: string): IAmResponse<T> => {
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [isError, setIsError] = useState<string>('');
    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsError(error)
                setIsLoading(false);
            });
    }, [url]);

    return { data, isLoading, isError };
};