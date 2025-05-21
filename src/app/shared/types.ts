export interface CreateUserAuthenticationDto {
    email: string;
    password: string;
}

export interface UserAuthenticationViewModel {
    id: number;
    userId: number;
    token: string;
    date: string;
}

export interface UserAuthenticatedDto {
    authenticationId: number;
    userId: number;
    date: string;
}

export interface CreateUserDto {
    password: string;
    passwordConfirmation: string;
    firstName: string;
    lastName: string;
    email: string;
    roleId: number;
}

export interface UserViewModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface UpdateUserDto extends CreateUserDto {
    id: number;
}

export interface CreateRolePermissionDto {
    roleId: number;
    permissionId: number;
}

export interface RolePermissionViewModel {
    id: number;
    roleId: number;
    roleName: string;
    permissionId: number;
    permissionName: string;
}

export interface PermissionViewModel {
    id: number;
    name: string;
}

export interface CreateRoleDto {
    name: string;
}

export interface RoleViewModel {
    id: number;
    name: string;
}

export interface UpdateRoleDto extends CreateRoleDto {
    id: number;
}

export interface CreatePermissionDto {
    name: string;
}

export interface PermissionViewModel {
    id: number;
    name: string;
}

export interface UpdatePermissionDto extends CreatePermissionDto {
    id: number;
}

export interface CreateJobDto {
    title: string;
    description: string;
    location: string;
    company: string;
    employmentType: string;
    salary: string;
    postedDate: string;
    companyUrl: string;
    companyLogo: string;
    userId: number;
}

export interface JobViewModel {
    id: number;
    title: string;
    description: string;
    location: string;
    company: string;
    employmentType: string;
    salary: string;
    postedDate: string;
    companyUrl: string;
    companyLogo: string;
    userId: number;
}

export interface UpdateJobDto extends CreateJobDto {
    id: number;
}

export interface CreateUserRoleDto {
    userId: number;
    roleId: number;
}

export interface UserRoleViewModel {
    user: UserViewModel;
    role: RoleViewModel;
}

export interface UpdateUserRoleDto extends CreateUserRoleDto {
    id: number;
}