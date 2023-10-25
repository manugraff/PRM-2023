import axios from "axios";
import { ICredential } from "../@types";

const api = axios.create({
    baseURL: 'http://localhost:300'
});

const _AUTH = '/auth'

const signIn = (Credential: ICredential) => api.post('${_AUTH}/signin', Credential);

export {
    signIn
}
