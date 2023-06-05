import React from "react";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

import { HomePage } from "./Pages/HomePage/home";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import { IndividualPortfolio } from "./Pages/Portfolios/IndividualPortfolio/individual";

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
        path: "/portfolio",
        element: <IndividualPortfolio />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
