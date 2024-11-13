import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./routes/MainPage";
import ProfilePage from "./routes/ProfilePage";
import Guidelines from "./routes/Guidelines";

import "./styles/app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/profile/:username",
    element: <ProfilePage />,
  },
  {
    path: "/guidelines",
    element: <Guidelines />,
  },
]);

const root = createRoot(document.getElementById("app"));
root.render(<RouterProvider router={router} />);
