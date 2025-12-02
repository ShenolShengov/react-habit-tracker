import { BrowserRouter, Route, Routes } from "react-router";
import GuestGuard from "./guards/GuestGuard";
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AuthGuard from "./guards/AuthGuard";
import Home from "./components/home/Home";
import DashboardLayout from "./layouts/DashboardLayout";
import Logout from "./components/logout/Logout";
import Dashboard from "./components/dashboard/Dashboard";
import AddHabit from "./components/habits/addHabit/AddHabit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestGuard />}>
          <Route element={<GuestLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>
        <Route element={<AuthGuard />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/habits/create" element={<AddHabit />} />
            <Route path="/habits/edit/:id" element={<AddHabit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
