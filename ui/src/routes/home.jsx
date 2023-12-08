import { Footer } from "../components/commons/footer";
import { NavBar } from "../components/commons/navbar";
import { BestSellers } from "../components/home/bestSellers";
import { HeroCarousel } from "../components/home/heroCarousel";
import { ShopCategories } from "../components/home/shopCategories";

export const Home = () => {
  return (
    <h1>
      <NavBar />
      <HeroCarousel />
      <BestSellers />
      <ShopCategories />
      <Footer />
    </h1>
  );
};
