import "./App.css";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import {
  authenticationApi,
  useGetTokenMutation,
} from "./services/authentication";

import DashboardContainer from "./containers/dashboardContainer";
import LoginContainer from "./containers/loginContainer";
import SignUpContainer from "./containers/signUpContainer";
import { useAppSelector } from "./store";
import { userLoggedIn } from "./store/account";

function App() {
  const [fetchToken] = useGetTokenMutation();

  useEffect(() => {
    (async () => {
      const response: any = await fetchToken({ uid: "" });
      localStorage.setItem("token", response.data.access_token);
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="dashboard/*"
        element={
          <RequireAuth>
            <DashboardContainer />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/signup" element={<SignUpContainer />} />
    </Routes>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const userLoggedInSelector: boolean = useAppSelector(userLoggedIn);
  const location = useLocation();

  if (!userLoggedInSelector) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
