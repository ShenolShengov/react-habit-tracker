import { useNavigate } from "react-router";
import { useAuth } from "../store/auth-context";
import { useEffect } from "react";
import { Loader } from "@mantine/core";

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
