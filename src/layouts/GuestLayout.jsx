import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function GuestLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
