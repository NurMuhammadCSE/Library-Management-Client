import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import CategoryBooks from "../page/Home/CategoryBooks/CategoryBooks";
import BookDetails from "../page/Home/BookDetails/BookDetails";
import SignUp from "../page/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Login from "../page/Login/Login";
import BorrowBooks from "../page/BorrowBooks/BorrowBooks";

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
        element: (
          <PrivateRoute>
            <CategoryBooks></CategoryBooks>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/${params.category}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/borrowBooks",
        element: <BorrowBooks></BorrowBooks>,
        loader: () => fetch('http://localhost:5000/allBorrowBooks')
      },
    ],
  },
]);
