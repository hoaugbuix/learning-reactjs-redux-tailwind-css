import * as actions from "../actions/tag.actions";
import { getLangIDApi, getAllLangApi } from "../../services/lang.service";
import { Dispatch } from "redux";
import { useFetchData } from "../../hooks/useFetchingData";



export const getLangById = (id: string) => (dispatch: Dispatch) => {
    dispatch(actions.getLangIdStart())
    return getLangIDApi(id)
        .then((res: any) => dispatch(actions.getLangIdSuccess(res)))
        .catch((err: any) => dispatch(actions.getLangIdFailer(err)))
}

export const getAllLang = () => (dispatch: Dispatch) => {
    dispatch(actions.getLangAllStart())
    return getAllLangApi()
        .then((res: any) => dispatch(actions.getLangAllSuccess(res)))
        .catch((err: any) => dispatch(actions.getLangAllFailer(err)))
}


export const getAllUser = (data: any) => (dispatch: Dispatch) => {
    console.log(data)
    return dispatch({ type: 'GET_USER', payload: data });
}