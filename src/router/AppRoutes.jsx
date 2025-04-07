import { createBrowserRouter } from "react-router-dom";
// import Register from "../pages/auth/Register";
// import Login from "../pages/auth/Login";
import Home from "../pages/Accueil";
import Layout from "../layouts/layout";
import NotFound from "../pages/NotFound";
import Apropos from "../pages/Apropos";
import Projets from "../pages/Projets";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Apropos",
        element: <Apropos />,
      },
      {
        path: "/projects",
        element: <Projets />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
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
