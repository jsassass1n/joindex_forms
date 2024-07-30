import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { AppRoutes } from '@src/shared/config/routesPath';
import { Suspense, useEffect } from 'react';
import { useAppDispatch } from '@src/shared/providers/ReduxProvider/hooks/hooks';
import { userActions } from '@src/entities/User/model/slice/userSlice';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@src/entities/User/model/selectors/getUserAuthData/getUserAuthData';

function App() {
  const dispatch = useAppDispatch();
  const data = useSelector(getUserAuthData);
  console.log(data);
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path={AppRoutes.login} element={<LoginPage />} />
        <Route path={AppRoutes.register} element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
