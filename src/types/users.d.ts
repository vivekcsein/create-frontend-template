
export type defaultProfileType = "DEFAULT";
export type sellerProfileType = "SELLER";
export type adminProfileType = "ADMIN";

export type IUserProfileType =
    | defaultProfileType
    | sellerProfileType
    | adminProfileType;

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    role: IUserProfileType;
}

export interface IuserInfo {
    id: string;
    name: string;
    email: string;
    role?: IUserProfileType;
}