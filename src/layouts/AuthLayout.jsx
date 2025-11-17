import { Outlet } from "react-router";
import Container from "../components/ui/Container";

export default function AuthLayout() {
  return (
    <Container className="justify-center items-center min-h-dvh">
      <Outlet />
    </Container>
  );
}
