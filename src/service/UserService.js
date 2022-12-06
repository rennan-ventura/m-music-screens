import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Config from '../util/Config'
import { useSelector } from 'react-redux'



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
        return axios({
            url: Config.API_URL + '/api/orders',
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

    async listOrder(data) {
        const token = useSelector( state => state.token )
        return axios({
            url: Config.API_URL + '/api/orders/user/' + data.id + '/list',
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            headers: {
                Authorization: token
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