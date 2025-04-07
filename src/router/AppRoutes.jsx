import { createBrowserRouter } from "react-router-dom";
// import Register from "../pages/auth/Register";
// import Login from "../pages/auth/Login";
import Home from "../pages/Home";
import Layout from "../layouts/layout";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/register",
      //   element: <Register />,
      // },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
    ],
  },
  // {
  //   path: "/",
  //   element: <Home />,
  // },

  {
    path: "*",
    element: <NotFound/>,
  },
]);
