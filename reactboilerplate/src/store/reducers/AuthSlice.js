import { createSlice } from '@reduxjs/toolkit'
import { ActionTypes } from '../types/types';

const initialState = {
  isLogin: false,
  userData:null
}

export const AuthSlice = createSlice({
  name: 'AuthReducer',
  initialState,
  reducers: {
    login: (state,actions) => {
        state.isLogin= actions.payload.isLogin
        state.userData=actions.payload.userData
  }
}})

// Action creators are generated for each case reducer function
export const { login } = AuthSlice.actions

export default AuthSlice.reducer