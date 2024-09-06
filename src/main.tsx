import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Home from "./routes/Home";
import Results from "./routes/Results";
import { itemDetailLoader, itemsLoader } from "./routes/loaders";
import ProductDetail from "./routes/ProductDetail";
import Error from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/items",
    element: <Results />,
    loader: itemsLoader,
  },
  {
    path: "/items/:id",
    element: <ProductDetail />,
    loader: ({ params }) => {
      return itemDetailLoader(params.id!);
    }
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
