import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedLayout = () => {
  const isLogin = useSelector((state) => state.AuthReducer.isLogin);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
