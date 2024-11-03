export interface AuthenticationViewModel {
    userId: number;
    date: string;
}

export interface AuthenticateDto {
    email: string;
    password: string;
}

export interface AuthenticatedDto {
    token: string;
    authentication: AuthenticationViewModel;
}