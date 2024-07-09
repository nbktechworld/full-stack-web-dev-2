import App from './App';
import Index from './pages/index';
import Signup from './pages/signup';
import Messages from './pages/messages';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        element: <Signup />,
        path: '/signup',
      },
      {
        element: <Messages />,
        path: '/messages',
      }
    ]
  }
];

export default routes;
