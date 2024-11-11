import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./routes/MainPage";

import "./styles/app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

const root = createRoot(document.getElementById("app"));
root.render(<RouterProvider router={router} />);
