import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import AuthProvider from "./provider/AuthProvider";
import Users from "./components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch(`http://localhost:5000/user`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
