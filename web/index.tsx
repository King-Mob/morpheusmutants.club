import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import catchLinks from "catch-links";
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

const Root = () => {
  const navigate = useNavigate();

  catchLinks(window, function (href) {
    console.log(href);
    navigate(href);
  });

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<Root />);
