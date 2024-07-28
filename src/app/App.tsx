import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { AppRoutes } from '@src/shared/config/routesPath';

function App() {
  return (
    <>
      <Routes>
        <Route path={AppRoutes.login} element={<LoginPage />} />
        <Route path={AppRoutes.register} element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
