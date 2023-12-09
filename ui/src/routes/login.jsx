import { NavBar } from "../components/commons/navbar";
import { Footer } from "../components/commons/footer";
import LoginForm from "../components/auth/loginForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Login = () => {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const navigate = useNavigate();
  if (isLoggedIn) navigate("/");
  return (
    <>
      <NavBar />
      <LoginForm />
      <Footer />
    </>
  );
};
