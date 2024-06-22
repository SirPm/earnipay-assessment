import React from "react";
import { GlobalStyle } from "./components/global-style";
import { AuthProvider } from "./context/auth-context";
import { Routes } from "./routes";

export const App = () => {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  );
};
