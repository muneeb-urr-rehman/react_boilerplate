import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json, RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes';
import { login } from './store/reducers/AuthSlice';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth")
    const userData = JSON.parse(localStorage.getItem("userData"))
    console.log("userData", userData);
    if (isAuth) {
      dispatch(login({ isLogin: true, userData: userData }))
    }
  }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
