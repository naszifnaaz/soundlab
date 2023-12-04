import { Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Login } from "./login";
import { Register } from "./register";
import { Dashboard } from "./dashboard";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
};
