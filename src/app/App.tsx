import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { AppRoutes } from '@src/shared/config/routesPath';
import { Suspense, useEffect, useState } from 'react';
import { useAppDispatch } from '@src/shared/providers/ReduxProvider/hooks/hooks';
import { userActions } from '@src/entities/User/model/slice/userSlice';
import { LoginPageAsync } from '@src/pages/LoginPage/LoginPage.async';
import { useSelector } from 'react-redux';
import { StateSchema } from '@src/shared/providers/ReduxProvider/StateSchema';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useSelector((state: StateSchema) => state.user.authData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(userActions.initAuthData());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    if (!user && location.pathname !== '/register') {
      navigate('/login');
    }
  }, [user, navigate, location.pathname]);

  const Redirect = () => {
    useEffect(() => {
      navigate('/');
    });
    return <></>;
  };

  const ProtectedRoutes = () => {
    return (
      <Routes>
        <Route path={'/'} element={<div>Main</div>} />
        <Route path={'*'} element={<Redirect />} />
      </Routes>
    );
  };

  const AuthRoutes = () => {
    return (
      <Routes>
        <Route path={AppRoutes.login} element={<LoginPageAsync />} />
        <Route path={AppRoutes.register} element={<RegisterPage />} />
      </Routes>
    );
  };

  return (
    <Suspense fallback="Loading...">
      {user && !loading && ProtectedRoutes()}
      {!user && !loading && AuthRoutes()}
    </Suspense>
  );
}

export default App;
