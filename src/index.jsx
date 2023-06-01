import React from "react";
// import { Footer } from "./components/Footer";
// import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; 
import { createRoot } from "react-dom";


const router = createBrowserRouter([
  {path: "/", element: <Home />},
  // {path: "/about", element: <About />},
])

export const App = () => (
   <>
  
   <RouterProvider router={router}/>  
 
   </>
  
  );
 

  createRoot(document.querySelector('#app')).render(<App />, );