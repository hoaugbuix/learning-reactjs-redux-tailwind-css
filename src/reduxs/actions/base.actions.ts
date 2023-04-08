export type getFieldStart = <T>() => ({ type: T });
export type getFieldSuccess = <T, P>(p: Array<P> | any) => ({ type: T, payload: P });
export type getFieldFailer = <T, P>(p: string | any) => ({ type: T, payload: P });


export interface ActionType {
    type: any;
}

export interface Actions {
    type: any;
    payload: any;
}
