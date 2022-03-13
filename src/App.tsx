import "./App.css";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import DashboardContainer from "./containers/dashboardContainer";
import HomeContainer from "./containers/homeContainer";
import LoginContainer from "./containers/loginContainer";
import React from "react";
import { useAppSelector } from "./store";
import { userLoggedIn } from "./store/account";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardContainer />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </div>
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
