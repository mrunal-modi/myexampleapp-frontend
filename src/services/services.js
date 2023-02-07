import axios from "axios";
import {API_URL} from "../config/config";

export const _create = (name, email) => {
    return axios.post(API_URL + '/user', {
        "name": name,
        "email": email
    })
}

export const _read = () => {
    return axios.get(API_URL + '/user')
}

export const _update = (name, email, newEmail) => {
    return axios.put(API_URL + '/user' + email, {
        "name": name, 
        "email": newEmail
    })
}

export const _delete = (email) => {
    return axios.delete("/delete/" + email)
}
