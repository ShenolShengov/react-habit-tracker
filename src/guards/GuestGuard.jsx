import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../store/auth-context";

export default function GuestGuard() {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}
