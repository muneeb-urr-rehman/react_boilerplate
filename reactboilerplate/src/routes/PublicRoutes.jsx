import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "../screens/Home/Home";
import Login from "../screens/login/Login";

export const publicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "signup",
    element: <div>signup</div>,
  },
]);

