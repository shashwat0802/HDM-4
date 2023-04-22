import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import ClimateData from "./components/ClimateData";
import TrafficFlowPattern from "./pages/TrafficFlowPattern";
import RoadNetwork from "./pages/RoadNetwork";
import Login from "./pages/Login";
import SpeedFlowtype from "./components/SpeedFlowtype";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "climate-data",
    element: <ClimateData />,
  },
  {
    path: "speed-flow",
    element: <SpeedFlowtype />,
  },
  {
    path: "traffic-flow",
    element: <TrafficFlowPattern />,
  },
  {
    path: "road-network",
    element: <RoadNetwork />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
