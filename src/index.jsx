import React from "react";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { IndividualPortfolio } from "./Pages/Portfolios/IndividualPortfolio/Individual";

export const App = () => {
  return (
    <main className="main-box">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/portfolios/:id",
        element: <IndividualPortfolio />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
