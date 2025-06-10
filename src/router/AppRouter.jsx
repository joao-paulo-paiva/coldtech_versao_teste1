import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; // Layout principal
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Admin/Login';
import Dashboard from '../pages/Admin/Dashboard';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout principal com Navbar/Footer
    children: [
      { index: true, element: <LandingPage /> }, // Página inicial
      { path: 'login', element: <Login /> },
      {
        path: 'admin',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
    ],
  },
]);

export default router;
