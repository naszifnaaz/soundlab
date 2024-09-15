import { Footer } from "../components/commons/footer";
import { NavBar } from "../components/commons/navbar";
import { BestSellers } from "../components/home/bestSellers";
import { DailyDeals } from "../components/home/dailyDeals";
import { HeroCarousel } from "../components/home/heroCarousel";
import { ShopByLifestyle } from "../components/home/shopByLifestyle";
import { ShopCategories } from "../components/home/shopCategories";

export const Home = () => {
  return (
    <h1>
      <NavBar />
      <HeroCarousel />
      <BestSellers />
      <ShopCategories />
      <ShopByLifestyle />
      <DailyDeals />
      <Footer />
    </h1>
  );
};
