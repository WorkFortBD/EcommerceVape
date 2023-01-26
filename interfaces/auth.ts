export interface ILogin {

    email: string;
    password:string;
    remember:boolean;
}

export interface IAuthReducer {
    userData: ILogin,
    isLoading:boolean,
    authToken:string,
    status:boolean,
    message:string,
    isSignedIn:boolean,
    isSignedOut:boolean
}
