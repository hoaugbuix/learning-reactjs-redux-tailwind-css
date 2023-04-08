import { BaseService } from "../bases/services/base-service-impl";

const baseService = new BaseService<any, any>();

export const getLangIDApi = (id: string): Promise<ResGetLangIDApi> => baseService.findById(`/lang/findById`, id)


export const getAllLangApi = (): Promise<ResGetAllLangApi> => baseService.findAll('/lang/findAll');