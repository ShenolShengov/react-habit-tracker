import { Outlet } from "react-router";
import Container from "../ui/Container";

export default function AuthLayout() {
  return (
    <Container className="justify-center items-center min-h-dvh">
      <Outlet />
    </Container>
  );
}
