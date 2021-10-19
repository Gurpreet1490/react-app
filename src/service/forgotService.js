import http from "./httpService";
import { apiUrl} from "../config.json";
//import axios from 'axios';

const apiEndpoint = apiUrl + "/v3/forgot_password";
//axios.defaults.headers['Content-Type'] = 'text/plain';

export function forgot(emailId) {
    return http.post(apiEndpoint, {
        emailId
    }
    );

}
