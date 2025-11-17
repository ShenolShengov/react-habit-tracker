import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Loader } from "@mantine/core";
import { useAuth } from "../../store/auth-context";

export default function Logout() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("logout");

    const handleLogout = async () => {
      if (!isAuthenticated) {
        return;
      }
      try {
        await logout();
      } catch (e) {
        console.error(e);
      } finally {
        navigate("/");
      }
    };
    handleLogout();
  }, [navigate, isAuthenticated, logout]);

  return <Loader size={"xl"} />;
}
