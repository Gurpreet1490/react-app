import http from "./httpService";
import { apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "/v3/reset_password";

export function reset(password, confirmPassword) {
    return http.post(apiEndpoint, {
        password, confirmPassword,
        method: "POST",
    headers: {
        "Content-Type":"application/json"
    },
        body: 'moto=${this.state.moto}'
    }
    );
}