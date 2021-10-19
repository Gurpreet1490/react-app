import http from "./httpService";
import { apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "/v2/login";

export function login(emailId, password) {
    return http.post(apiEndpoint, {
        emailId, password
    }
    );

}

