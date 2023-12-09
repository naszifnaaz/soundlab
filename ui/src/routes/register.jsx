import RegisterForm from "../components/auth/registerForm";
import { Footer } from "../components/commons/footer";
import { NavBar } from "../components/commons/navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Register = () => {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const navigate = useNavigate();
  if (isLoggedIn) navigate("/");
  return (
    <>
      <NavBar />
      <RegisterForm />
      <Footer />
    </>
  );
};
