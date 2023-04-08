import requestUtils from "../../utils/requestUtils";
import { IBaseService } from "./base-service";

export class BaseService<T, D> implements IBaseService<T, D> {

    findAll(url: string): Promise<ApiResponses<T>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return requestUtils.get(url)
                    .then((response) => {
                        if (response) {
                            resolve({
                                data: {
                                    results: response.data.data
                                },
                                message: response.data.msg
                            })
                        }
                    }).catch(err => {
                        reject(new Error(err))
                    })
            }, 100)
        });
    }

    findById(url: string, id: D): Promise<ApiResponse<T>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return requestUtils.get(url + `/${id}`)
                    .then((response) => {
                        if (response.data) {
                            resolve({
                                data: {
                                    result: response.data.data
                                },
                                message: response.data.msg
                            })
                        }
                    }).catch(err => {
                        reject(new Error(err))
                    })
            }, 100)
        });
    }

    findByField(url: string, field: D): Promise<ApiResponse<T>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return requestUtils.get(url + `/${field}`)
                    .then((response) => {
                        if (response.data) {
                            resolve({
                                data: {
                                    result: response.data.data
                                },
                                message: response.data.msg
                            })
                        }
                    }).catch(err => {
                        reject(new Error(err))
                    })
            }, 100)
        });
    }

    createData(url: string, data: D): Promise<ApiResponse<T>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return requestUtils.post(url, data)
                    .then((response) => {
                        if (response.data) {
                            resolve({
                                data: {
                                    result: response.data.data
                                },
                                message: response.data.msg
                            })
                        }
                    }).catch(err => {
                        reject(new Error(err))
                    })
            }, 100)
        });
    }

    updateData(url: string, id: string, data: D): Promise<ApiResponse<T>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return requestUtils.put(url + `/${id}`, data)
                    .then((response) => {
                        if (response.data) {
                            resolve({
                                data: {
                                    result: response.data.data
                                },
                                message: response.data.msg
                            })
                        }
                    }).catch(err => {
                        reject(new Error(err))
                    })
            }, 100)
        });
    }

    delete(url: string, id: string): Promise<ApiResponse<T>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return requestUtils.delete(url + `/${id}`)
                    .then((response) => {
                        if (response.data) {
                            resolve({
                                data: {
                                    result: response.data.data
                                },
                                message: response.data.msg
                            })
                        }
                    }).catch(err => {
                        reject(new Error(err))
                    })
            }, 100)
        });
    }

}