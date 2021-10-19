import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/v4/register";

export function register(user) {
    return http.post(apiEndpoint, {
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId,
        password: user.password
    });

}