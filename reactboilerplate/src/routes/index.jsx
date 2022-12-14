import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { HomeLayout } from './PublicRoutes';
import Login from '../screens/login/Login';
import Home from '../screens/Home/Home';
import { ProtectedLayout, ProtectedRoute } from './ProtectedRoutes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path={'/'} element={<Home />} />
      </Route>
    </>
  )
);
