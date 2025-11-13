import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout.tsx';
import AboutPage from '../pages/AboutPage.tsx';
import DemoPage from '../pages/DemoPage.tsx';
import HomePage from '../pages/HomePage.tsx';
import NotFoundPage from '../pages/NotFoundPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'demo',
        element: <DemoPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
