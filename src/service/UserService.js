import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Config from '../util/Config'



class UserService{
    

    async signup(data) {
        return axios({
            url: Config.API_URL + '/api/auth/signup',
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADERS_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async signin(data) {
        return axios({
            url: Config.API_URL + '/api/auth/signin',
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADERS_REQUEST
        }).then((response) => {
            AsyncStorage.setItem("MMUSIC-TOKEN", response.data.accessToken);
            AsyncStorage.setItem("MMUSIC-UUID", response.data.id);
            AsyncStorage.setItem("MMUSIC-USERNAME", response.data.username);
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async postOrder(data) {
        const token = data.token
        return axios({
            url: Config.API_URL + '/api/orders',
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: 'application/json',
                Authorization: token
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async listOrder(data) {
        const token = data.token;
        return axios({
            url: Config.API_URL + '/api/orders/user/' + data.id + '/list',
            method: "GET",
            timeout: Config.TIMEOUT_REQUEST,
            headers: {
                Accept: 'application/json', 
                Authorization: token,
            } 
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async changeStatusOrder(data) {
        const token = data.token;
        return axios({
            url: Config.API_URL + '/api/orders/' + data.id + '/status',
            method: "PATCH",
            timeout: Config.TIMEOUT_REQUEST,
            headers: {
                Accept: 'application/json', 
                Authorization: token,
            } 
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

}

const userService = new UserService()
export default userService