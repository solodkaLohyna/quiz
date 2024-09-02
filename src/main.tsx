import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../app/App.tsx";
import { Quiz } from "./components/Quiz/Quiz.tsx";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage.tsx";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm.tsx";
import "./global.css";
import { LoginForm } from "./components/LoginForm/LoginForm.tsx";
import { UserProvider } from "./contexts/UserContext.tsx";
import { AdminPanel } from "./components/AdminPanel/AdminPanel.tsx";

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
  },
  {
    path: '/adminPanel',
    element: <AdminPanel />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider> 
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
