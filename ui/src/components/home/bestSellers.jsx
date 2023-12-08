import headphones from "../../assets/headphones.gif";
import earphones from "../../assets/earphones.gif";
import neckbands from "../../assets/neckbands.gif";
import speakers from "../../assets/speakers.gif";
import { BestSellerCard } from "./bestSellerCard";

export const BestSellers = () => {
  return (
    <div className="w-9/12 m-auto">
      <h2 className="text-2xl mt-5 ml-5 lg:my-5">
        Explore{" "}
        <span className="text-2xl font-semibold link link-underline link-underline-black text-black ">
          Bestsellers
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5">
        {BestSellerProducts.map((product, index) => {
          return <BestSellerCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
};

const BestSellerProducts = [
  {
    title: "Headphones",
    link: headphones,
  },
  {
    title: "Earphones",
    link: earphones,
  },
  {
    title: "Neckbands",
    link: neckbands,
  },
  {
    title: "Speakers",
    link: speakers,
  },
];
