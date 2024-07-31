import { createBrowserRouter } from 'react-router-dom';
import Layout from './featured/layout';
import HomePage from './pages/home';
import ContactPage from './pages/contact';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);
