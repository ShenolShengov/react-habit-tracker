import { Navigate, Outlet} from "react-router";
import { useAuth } from "../../store/auth-context";
export default function AuthGuard() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
