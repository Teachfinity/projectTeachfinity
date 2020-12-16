import axios from "axios";
import LocalStore from "../config/localStore";


const localStore = new LocalStore();

export const HTTP = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 60000,
});

HTTP.interceptors.request.use(
    (config)=>{
        config.headers.authorization = "Bearer "+localStore.getToken()
        return config
    },
    (error)=>{
        console.log(error)
    }
)



