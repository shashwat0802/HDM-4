import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ClimateData from './components/ClimateData';
import SpeedFlowType from './components/SpeedFlowType';
import TrafficFlowPattern from './pages/TrafficFlowPattern';
import RoadNetwork from './pages/RoadNetwork';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
  },
  {
    path: 'climate-data',
    element: <ClimateData/>,
  },
  {
    path: 'speed-flow',
    element: <SpeedFlowType/>,
  },
  {
    path: 'traffic-flow',
    element: <TrafficFlowPattern/>,
  },
  {
    path: 'road-network',
    element: <RoadNetwork/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);