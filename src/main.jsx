import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import BlogDetails from "./BlogDetails";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={appRoute} />
    </UserContextProvider>
  </StrictMode>
);
