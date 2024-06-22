import React from "react";
import {
  BrowserRouter as Router,
  Routes as ReactRoutes,
  Route,
  //   Navigate,
} from "react-router-dom";
// import { useAuth } from "./context/auth-context";
import { AuthLayout } from "./layout/auth-layout";
import { MainLayout } from "./layout/main-layout";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { Signup } from "./pages/signup";
import { AuthRedirect } from "./components/auth-redirect";
import { PAGE_ROUTES } from "./utils/constants";
import { VerifyEmail } from "./pages/verify-email";
import { AccountLocked } from "./pages/account-locked";

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }
// const ProtectedRoute = (props: ProtectedRouteProps) => {
//   const { children } = props;
//   const { user } = useAuth();

//   return user ? <>{children}</> : <Navigate to="/login" />;
// };

export const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<AuthRedirect />} />
        <Route element={<AuthLayout />}>
          <Route path={PAGE_ROUTES.LOGIN} element={<Login />} />
          <Route path={PAGE_ROUTES.SIGNUP} element={<Signup />} />
          <Route path={PAGE_ROUTES.VERIFY_EMAIL} element={<VerifyEmail />} />
          <Route
            path={PAGE_ROUTES.ACCOUNT_LOCKED}
            element={<AccountLocked />}
          />
        </Route>
        <Route element={<MainLayout />}>
          <Route
            path={PAGE_ROUTES.DASHBOARD}
            element={
              //   <ProtectedRoute>
              <Dashboard />
              //   </ProtectedRoute>
            }
          />
        </Route>
      </ReactRoutes>
    </Router>
  );
};
