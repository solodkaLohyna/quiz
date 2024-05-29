import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../app/App.tsx";
import { Quiz } from "./components/Quiz/Quiz.tsx";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage.tsx";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm.tsx";
import "./global.css";
import { LoginForm } from "./components/LoginForm/LoginForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />

  },
  {
    path: '/quiz/:id',
    element: <Quiz />
  },
  {
    path: '/registration',
    element: <RegistrationForm />
  },
  {
    path: '/login',
    element: <LoginForm />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
