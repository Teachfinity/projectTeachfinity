import { HTTP } from "../lib/httpService";

const LOGIN = 'http://localhost:5000/api/user/login' ;
const REGISTER_USER = 'http://localhost:5000/api/user/register' ;

export default class AuthService {
     logIn = ( UserModal) => {
        return HTTP.post(LOGIN, UserModal, {
            headers: {
                'Content-Type': "application/json"
            }
        })
    }

     signUp = ( UserModal) => {
        return HTTP.post(REGISTER_USER, UserModal, {
            headers: {
                contentType: "application/json"
            }
        })
    }

    

}