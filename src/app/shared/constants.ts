import { environment } from "../../environments/environment";

export const HEADERS = {
    'Authorization': '2f7b24b4e7e9d8b7a1f1d5f5f5c1e2f7c6d1e9f2a3b4c5d6e7f8a9b0c1d2e3f4',
    'Content-Type': 'application/json'
}

export const BASE_API_URL = environment.apiUrl;

export const ENDPOINTS = {
    authenticate: `${BASE_API_URL}/User/authenticate`,
    createUser: `${BASE_API_URL}/User/create`
};