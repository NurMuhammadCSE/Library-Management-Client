import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import CategoryBooks from "../page/Home/CategoryBooks/CategoryBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "/details/:category",
        element: <CategoryBooks></CategoryBooks>
      },
    ],
  },
]);
