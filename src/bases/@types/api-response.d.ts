interface ApiResponse<T> extends Res<T> {
    data: {
        result: T,
    },
}

interface ResGetApiResponse<T> extends ActionRedux {
    payload: ApiResponse<T>,
}

interface ApiResponses<T> extends Res<T> {
    data: {
        results: Array<T>,
    },
}

interface ResGetApiResponses<T> extends ActionRedux {
    payload: ApiResponses<T>
}