import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";


// axios.post("http://localhost:8080/api", {
//     withCredentials: true,
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     }
//   },{
//     auth: {
//       emailId: "emailId",
//       password: "password"
//   }}).then(function(response) {
//     console.log('Authenticated');
//   }).catch(function(error) {
//     console.log('Error on Authentication');
//   });

 
axios.interceptors.response.use(null, error => {
    const expectedError = 
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

    if (!expectedError) {
        logger.log( error);
        toast.error ("An unexpected error occured.");
    }
    return Promise.reject(error);

})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}