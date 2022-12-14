import axios from "axios"
import {
    login
} from '../reducers/AuthSlice';
export const loginMiddleware = (payload) => {
    return (dispatch) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await axios.post("https://dummyjson.com/auth/login",
                    { username: 'kminchelle', password: '0lelplR' },
                    { 'Content-Type': 'application/json' })
                console.log(data);
                if (data.status == 200) {
                    localStorage.setItem("isAuth", true)
                    localStorage.setItem("userData", JSON.stringify(data?.data))
                    dispatch(login({ isLogin: true, userData: data?.data }))
                    resolve()
                }
                else {
                    reject("error in login")
                }
            } catch (error) {
                reject(error)
            }
        })
    }
}