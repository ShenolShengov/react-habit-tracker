import { Navigate, Outlet } from "react-router";
import { useAuth } from "../store/authContext";

export default function GuestGuard() {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}
