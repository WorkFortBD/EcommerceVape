export interface ILogin {
    /**
     * Product name.
     */
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
