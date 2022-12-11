import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Login from "./components/Login";
import Home from "./container/Home";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!User) navigate("/login");
  }, []);
  return (
    <Routes>
      <Route
        path="login"
        element={
          <GoogleOAuthProvider
            clientId={import.meta.env.VITE_APP_GOOGLE_API_TOKEN}
          >
            <Login />
          </GoogleOAuthProvider>
        }
      />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
