import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import  AuthReducer from './reducers/AuthSlice'

export const store = configureStore({
    middleware:[thunk],
    reducer: {AuthReducer},
})