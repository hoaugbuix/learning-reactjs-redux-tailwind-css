import { useState } from 'react';
import axiosIntance from '../config/AxiosConfig'
interface IGetList<T> {
    data: Array<T> | null;
    isPending: boolean;
    hasError: boolean;
    errorMessage: string;
    code: number;
    message: string;
    pagination?: Params

}

interface ICreateOne<T> {
    data: T | null;
    isPending: boolean;
    hasError: boolean;
    errorMessage: string;
    code: number;
    message: string;
    isSuccess: boolean

}

interface IUpdateOne<T> {
    data: T | null;
    isPending: boolean;
    hasError: boolean;
    errorMessage: string;
    code: number;
    message: string;
    isSuccess: boolean

}
interface Params {
    page: number,
    size: number,
    total: number,
    searchText?: string
}


function useHookApi<T>() {
    const [stateFetchList, setStateFetchList] = useState<IGetList<T>>({
        isPending: false,
        data: null,
        hasError: false,
        errorMessage: '',
        code: 999,
        message: '',
    });
    const [stateCreateOne, setStateCreateOne] = useState<ICreateOne<T>>({
        isPending: false,
        data: null,
        hasError: false,
        errorMessage: '',
        code: 999,
        message: '',
        isSuccess: false
    });
    const [statepdateOne, setStateUpdateOne] = useState<ICreateOne<T>>({
        isPending: false,
        data: null,
        hasError: false,
        errorMessage: '',
        code: 999,
        message: '',
        isSuccess: false
    });



    const getList = async (url: string, params?: object) => {
        setStateFetchList({ ...stateFetchList, isPending: true })
        try {
            const response = await axiosIntance.get<Array<T>>(url, { params });
            setStateFetchList({ ...stateFetchList, data: response.data, code: 0 })
        } catch (error: any) {
            setStateFetchList({ ...stateFetchList, isPending: false, hasError: true, errorMessage: error.message })
        }
    };

    const createOne = async (url: string, payload: T) => {
        setStateCreateOne({ ...stateCreateOne, isPending: true })
        try {
            const responseCreate = await axiosIntance.post<ICreateOne<T>>(url, payload);
            setStateCreateOne({ ...stateCreateOne, code: 0, isPending: false, isSuccess: true })
        } catch (error: any) {
            setStateCreateOne({ ...stateCreateOne, hasError: true, errorMessage: error.message, isPending: false })

        }
    };

    const updateOne = async (url: string, payload: Partial<T> & { id: string }) => {
        setStateCreateOne({ ...stateCreateOne, isPending: true })
        try {
            const responseCreate = await axiosIntance.patch<IUpdateOne<T>>(`${url}/${payload.id}`, payload);
            setStateCreateOne({ ...stateCreateOne, code: 0, isPending: false, isSuccess: true })
        } catch (error: any) {
            setStateCreateOne({ ...stateCreateOne, hasError: true, errorMessage: error.message, isPending: false })

        }
    };


    return { stateFetchList, stateCreateOne, getList, createOne };
}

export default useHookApi;