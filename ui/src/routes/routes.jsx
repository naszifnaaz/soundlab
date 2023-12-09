import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./home";
import { Login } from "./login";
import { Register } from "./register";
import { Console } from "./console";
import UserProfile from "../components/commons/userProfile";
import { NotFound } from "./notFound";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/admin/console" element={<Console />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};
