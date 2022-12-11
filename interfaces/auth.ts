export interface ILogin {
    /**
     * Product name.
     */
    name: string;
    password:string;
}

export interface IAuthReducer {
    loginData: ILogin,
    authLoading:boolean,
}
