import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://smtp-nodejs-server-for-mail.herokuapp.com/',
    // baseURL: 'http://localhost:3010',
})
export const api = {
    createMessage(name: string, email: string, message: string){
        return instance.post('sendMessage', {name, email, message})
    }
}