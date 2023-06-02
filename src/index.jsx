import React from "react";
import { HomePage } from "./Pages/HomePage";
import { Portfolio } from "./Pages/Portfolio";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

export const App = () => {
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
