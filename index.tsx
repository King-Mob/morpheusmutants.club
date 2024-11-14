import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./web/routes/MainPage";
import About from "./web/routes/AboutPage";
import NoMatch from "./web/routes/NoMatch";
import ProfilePage from "./web/routes/ProfilePage";
import Guidelines from "./web/routes/Guidelines";

import "./web/styles/app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile/:username",
    element: <ProfilePage />,
  },
  {
    path: "/guidelines",
    element: <Guidelines />,
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);

const root = createRoot(document.getElementById("app"));
root.render(<RouterProvider router={router} />);
