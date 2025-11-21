// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext.jsx";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  // If not logged in, send them to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, show the protected content
  return <Outlet />;
}
