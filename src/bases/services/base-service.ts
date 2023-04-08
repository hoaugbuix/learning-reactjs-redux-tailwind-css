export interface IBaseService<T, D> {
    findAll(url: string): Promise<ApiResponses<T>>;
    findById(url: string, id: D): Promise<ApiResponse<T>>;
    findByField(url: string, field: D): Promise<ApiResponse<T>>;
    createData(url: string, data: D): Promise<ApiResponse<T>>;
    updateData(url: string, id: string, data: D): Promise<ApiResponse<T>>;
    delete(url: string, id: string): Promise<ApiResponse<T>>;
}


export type findAllData = <T>(url: string) => Promise<ApiResponses<T>>;
export type findDataById = <T>(url: string, id: string) => Promise<ApiResponse<T>>;
export type findDataByField = <T, D>(url: string, field: D) => Promise<ApiResponse<T>>;
export type createData = <T, D>(url: string, data: D) => Promise<ApiResponse<T>>;
export type updateData = <T, D>(url: string, id: string, data: D) => Promise<ApiResponse<T>>;
export type deleteData = <T>(url: string, id: string) => Promise<ApiResponse<T>>;