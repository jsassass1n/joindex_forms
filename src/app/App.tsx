import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { AppRoutes } from '@src/shared/config/routesPath';
import { Suspense, useEffect } from 'react';
import { useAppDispatch } from '@src/shared/providers/ReduxProvider/hooks/hooks';
import { userActions } from '@src/entities/User/model/slice/userSlice';
import { LoginPageAsync } from '@src/pages/LoginPage/LoginPage.async';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path={AppRoutes.login} element={<LoginPageAsync />} />
        <Route path={AppRoutes.register} element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
