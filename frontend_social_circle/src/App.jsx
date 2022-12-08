import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";

const App = () => {
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
