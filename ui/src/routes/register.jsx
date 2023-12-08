import RegisterForm from "../components/auth/registerForm";
import { Footer } from "../components/commons/footer";
import { NavBar } from "../components/commons/navbar";

export const Register = () => {
  return (
    <>
      <NavBar />
      <RegisterForm />
      <Footer />
    </>
  );
};
