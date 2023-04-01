import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);