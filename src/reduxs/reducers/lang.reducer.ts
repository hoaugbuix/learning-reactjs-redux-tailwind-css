import * as types from "../constains/lang.constains";
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
const inintialState = {
    langs: [],
    isFetching: true,
    messageError: '',
    isAuthenticated: false,
    lang: null as Lang | null,
    data: [],
    dataUser: {} as User
}

const langReducer = (state = inintialState, action: { type: any, payload: any }) => {
    switch (action.type) {
        case types.GET_LANG_ID_START:
            return {
                ...state, isFetching: true
            };
        case types.GET_USER:
            console.log(action)
            return {
                ...state, dataUser: { ...action.payload }
            };
        // return {
        //     ...state, isFetching: true
        // };
        case types.GET_LANG_ID_SUCCESS:
            return {
                ...state, isFetching: false,
                lang: action.payload.data.result,
                isAuthenticated: true
            };
        case types.GET_LANG_ID_FAILER:
            return {
                ...state,
                isFetching: false,
                messageError: action.payload
            };
        case types.GET_LANG_ALL_START:
            return {
                ...state, isFetching: true
            };
        case types.GET_LANG_ALL_SUCCESS:
            return {
                ...state, isFetching: false,
                langs: action.payload.data.results,
                isAuthenticated: true
            };
        case types.GET_LANG_ALL_FAILER:
            return {
                ...state,
                isFetching: false,
                messageError: action.payload
            };
        default:
            return state;
    }
};

export default langReducer;