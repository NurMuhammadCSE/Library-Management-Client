import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import CategoryBooks from "../page/Home/CategoryBooks/CategoryBooks";
import BookDetails from "../page/Home/BookDetails/BookDetails";

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
        path: "/:category",
        element: <CategoryBooks></CategoryBooks>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/${params.category}`),
      },
      {
        path: "/details/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },
]);
