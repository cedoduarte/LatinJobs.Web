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

export interface CreateUserDto {
    email: string;
    password: string;
    passwordConfirmation: string;
    firstName: string;
    lastName: string;
    roleId: number;
}

export interface UserViewModel
{
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}