import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './Home/App';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './login/Login';
import Register from './Register/Register';
import Error from './Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: 'login',
        element: <Login/>
      },{
        path: 'register',
        element: <Register/>
      }
    ]
  },{
    path: "*",
    element: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
