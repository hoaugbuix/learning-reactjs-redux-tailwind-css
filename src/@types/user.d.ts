export interface UserSignIn {
    usernameOrEmail: string;
    password: string;
}

interface ResLoginApi extends Res {
    data: {
        data: any;
    }
}

interface ResLogin extends ActionRedux { }

interface ReqRegister {
    address: string;
    birthDay: string;
    email: string;
    fullName: string;
    gender: string;
    password: string;
    phone: string;
    username: string
}

interface ResRegisterApi extends Res {
    data: {
        data: any;
    }
}

interface ResRegiser extends ActionRedux { }


interface User extends BaseModel {
    avatar: String;
    firstName: String;
    lastName: String;
    password: String;
    email: String;
    username: String;
    roles: any;
    activeCode: null;
}


interface ResGetUserIDApi implements ApiResponse<User> { }

interface ResGetUserID implements ResGetApiResponse<User> { }

interface ResGetUserAllApi implements ApiResponses<User> { }

interface ResGetUserAll implements ResGetApiResponses<User> { }