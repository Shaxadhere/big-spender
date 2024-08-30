import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Play from "../pages/Play";
import RichList from "../pages/RichList";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout component
    children: [
      {
        index: true,
        element: <RichList />, // Default child route
      },
      {
        path: "play/:id",
        element: <Play />, // Second child route
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
