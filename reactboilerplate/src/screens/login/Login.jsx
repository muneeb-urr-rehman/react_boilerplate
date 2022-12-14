import React from 'react';
import { useDispatch } from 'react-redux';
import { loginMiddleware } from '../../store/middleware/loginMiddleware';

const Login = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(loginMiddleware());
  };

  return (
    <div>
      <h1>login</h1>
      <button onClick={loginHandler}>login</button>
    </div>
  );
};

export default Login;
