import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <header>Dashboard Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Dashboard Footer</footer>
    </div>
  );
};
