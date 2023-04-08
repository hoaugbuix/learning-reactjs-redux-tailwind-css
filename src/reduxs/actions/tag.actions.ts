import * as types from "../constains/lang.constains";
import { Actions, ActionType, getFieldFailer, getFieldStart, getFieldSuccess } from "./base.actions";


export const getLangIdStart: getFieldStart = (): ActionType => ({ type: types.GET_LANG_ID_START })
export const getAllUser: getFieldSuccess = (data: any): any => ({ type: types.GET_USER, payload: data })

export const getLangIdSuccess: getFieldSuccess = (lang: ResGetLangIDApi): Actions => ({ type: types.GET_LANG_ID_SUCCESS, payload: lang });

export const getLangIdFailer: getFieldFailer = (messageError: string): Actions => ({ type: types.GET_LANG_ID_FAILER, payload: messageError });

export const getLangAllStart: getFieldStart = (): ActionType => ({ type: types.GET_LANG_ALL_START });

export const getLangAllSuccess: getFieldSuccess = (langs: ResGetAllLangApi): Actions => ({ type: types.GET_LANG_ALL_SUCCESS, payload: langs });

export const getLangAllFailer: getFieldFailer = (messageError: string): Actions => ({ type: types.GET_LANG_ALL_FAILER, payload: messageError });