import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Loader } from "@mantine/core";
import { useAuth } from "../../store/authContext";

export default function Logout() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout();
        navigate("/", {replace: true});
      } catch (e) {
        console.error(e);
        navigate("/login", {replace: true});
      }
    };
    handleLogout();
  }, [navigate, logout]);

  return <Loader size={"xl"} />;
}
