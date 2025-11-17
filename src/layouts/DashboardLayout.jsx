import { Outlet } from "react-router";
import Container from "../ui/Container";
import Navbar from "../Navbar";

export default function DashboardLayout() {
  return (
    <Container className="min-h-dvh">
      <Navbar />
      <div className="flex flex-1 pl-20">
        <Outlet />
      </div>
    </Container>
  );
}
