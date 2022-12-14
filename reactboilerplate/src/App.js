import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { protectedRoute } from './routes/ProtectedRoutes';
import { publicRoute } from './routes/PublicRoutes';
import { loginMiddleware } from './store/middleware/loginMiddleware';

function App() {
  const isLogin  =  useSelector((state)=>state.AuthReducer.isLogin)
  return (
    <>
    <RouterProvider router={isLogin ? protectedRoute : publicRoute} />
    </>
  );
}

export default App;
