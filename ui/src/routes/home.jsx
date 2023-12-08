import { Footer } from "../components/commons/footer";
import { NavBar } from "../components/commons/navbar";
import { HeroCarousel } from "../components/home/heroCarousel";

export const Home = () => {
  return (
    <h1>
      <NavBar />
      <HeroCarousel />
      <Footer />
    </h1>
  );
};
