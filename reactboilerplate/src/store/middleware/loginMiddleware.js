import axios from "axios"
import {
    login
  } from '../reducers/AuthSlice';
export const loginMiddleware = (payload)=>{
    return (dispatch)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                // const res = await fetch('https://dummyjson.com/auth/login', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({
                //       username: 'kminchelle',
                //       password: '0lelplR',
                //       // expiresInMins: 60, // optional
                //     })
                //   })
                //   console.log(await res.json());
                const data = await axios.post("https://dummyjson.com/auth/login",{username: 'kminchelle',
                      password: '0lelplR'},{ 'Content-Type': 'application/json' })
                      console.log(data);
            if(data.status == 200){
                dispatch(login({isLogin: true,userData:data?.data}))
                resolve()
            }
            else{
                reject("error in login")
            }
            } catch (error) {
                reject(error)
            }
        })
    }
}