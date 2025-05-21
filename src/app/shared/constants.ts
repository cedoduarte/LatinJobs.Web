import { environment } from "../../environments/environment";

export const BASE_API_URL = environment.apiUrl;

export const ENDPOINTS = {
    job: `${BASE_API_URL}/Job`,
    permission: `${BASE_API_URL}/Permission`,
    role: `${BASE_API_URL}/Role`,
    rolePermission: `${BASE_API_URL}/RolePermission`,
    userAuthentication: `${BASE_API_URL}/UserAuthentication`,
    user: `${BASE_API_URL}/User`,
    userRole: `${BASE_API_URL}/UserRole`,
};