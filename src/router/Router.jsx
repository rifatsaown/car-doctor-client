import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/Login", element: <Login /> },
      { path: "/SignUp", element: <SignUp /> },
      {
        path: "checkout/:id",
        element: <Checkout />,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: <PrivateRoute><Bookings/></PrivateRoute>,
      }
    ],
  },
]);

export default router;
