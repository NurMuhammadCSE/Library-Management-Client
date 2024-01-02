import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import "react-awesome-button/dist/styles.css";
import '@smastrom/react-rating/style.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
