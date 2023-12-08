import { NavBar } from "../components/commons/navbar";
import { Footer } from "../components/commons/footer";
import LoginForm from "../components/auth/loginForm";

export const Login = () => {
  return (
    <>
      <NavBar />
      <LoginForm />
      <Footer />
    </>
  );
};
