import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Bookings from "../pages/Bookings/Bookings";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";
import PrivateLogin from "./PrivateLogin";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/Login",
        element: (
          <PrivateLogin>
            <Login />
          </PrivateLogin>
        ),
      },
      { path: "/SignUp", element: <SignUp /> },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-cyan-iota.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: (
          <h1 className="text-red-800 font-extrabold text-center m-8 text-5xl">
            No Data Found
          </h1>
        ),
      },
    ],
  },
]);

export default router;
