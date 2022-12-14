import { Link, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const HomeLayout = () => {
  const isLogin = useSelector((state) => state.AuthReducer.isLogin);

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
