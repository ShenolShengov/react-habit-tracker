import { BrowserRouter, Route, Routes } from "react-router";
import GuestGuard from "../guards/GuestGuard";
import GuestLayout from "./GuestLayout";
import Home from "../components/home/Home";
import AuthLayout from "./AuthLayout";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import AuthGuard from "../guards/AuthGuard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestGuard />}>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>
        <Route element={<AuthGuard />}>
          <Route element={<Dashbard />}>
            <Route path="/dashboard" element={<>Dasboard placeholder</>} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
