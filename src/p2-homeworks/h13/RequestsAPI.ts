import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'

})

export const RequestsAPI = {
    getResponse(checked: boolean) {
        return instance.post('', {success: checked})
    }
}