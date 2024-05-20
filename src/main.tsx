import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "../app/App.tsx";
import {Quiz}  from "./components/Quiz/Quiz.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />

  },
  {
    path: '/quiz/:id',
    element: <Quiz />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
