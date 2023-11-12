import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Regi from "./Components/Regi";
import AuthProvider from "./Providers/AuthProvider";
import Orders from "./Components/Orders";
import PrivateRoutes from "./routes/PrivateRoutes";
import ErrorPage from "./Error/ErrorPage";
import HoneyMone from "./Components/HoneyMone";
import Brand from "./Components/Brand";
import UpdateTech from "./Components/UpdateTech";
import Calender from "./Components/Calender";
import Cards from "./Components/Cards/Cards";
import Bookings from "./Components/Bookings/Bookings";
import DetailsCard from "./Components/Details/DetailsCard";
import TakeAssignment from "./Components/TakeAssignment";
import GetMark from "./Components/GetMark";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/assignment"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regi",
        element: <Regi></Regi>,
      },
      {
        path: "/assignments",
        element: <Cards></Cards>,
        loader: () => fetch("http://localhost:5000/assignment"),
      },
      {
        path: "/calender",
        element: <Calender></Calender>,
      },
      {
        path: "/brand",
        element: <Brand></Brand>,
        loader: () => fetch("http://localhost:5000/assignment"),
      },
      {
        path: "/getmark/:id",
        element: (
          <PrivateRoutes>
            <GetMark></GetMark>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <DetailsCard></DetailsCard>,
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updatetech/:id",
        element: (
          <PrivateRoutes>
            <UpdateTech></UpdateTech>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`),
      },
      {
        path: "/tassignment/:id",
        element: (
          <PrivateRoutes>
            <TakeAssignment></TakeAssignment>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`),
      },
      {
        path: "/honeymone",
        element: (
          <PrivateRoutes>
            <HoneyMone></HoneyMone>
          </PrivateRoutes>
        ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoutes>
            <Bookings></Bookings>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
