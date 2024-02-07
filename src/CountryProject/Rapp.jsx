import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Loginform from "../ProjectLoginform/Loginform";

export default function Rapp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}
