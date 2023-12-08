import { CategoryCard } from "./categoryCard";

import wirelessEarbuds from "../../assets/wireless-earbuds.png";
import neckbands from "../../assets/neckbands.png";
import wirelessHeadphones from "../../assets/wireless-headphones.png";
import wirelessSpeakers from "../../assets/wireless-speakers.png";
import wiredHeadphones from "../../assets/wired-headphones.png";
import soundbars from "../../assets/soundbars.png";

export const ShopCategories = () => {
  return (
    <div className="w-9/12 m-auto">
      <h2 className="text-2xl mt-5 ml-5 lg:my-5">
        Shop By{" "}
        <span className="text-2xl font-semibold link link-underline link-underline-black text-black ">
          Categories
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5 m-3">
        {Categories.map((category, index) => {
          return <CategoryCard category={category} key={index} />;
        })}
      </div>
    </div>
  );
};

const Categories = [
  {
    img: wirelessEarbuds,
    title: "True Wireless Earbuds",
  },
  {
    img: neckbands,
    title: "Neckbands",
  },
  {
    img: wirelessHeadphones,
    title: "Wireless Headphones",
  },
  {
    img: wirelessSpeakers,
    title: "Wireless Speakers",
  },
  {
    img: wiredHeadphones,
    title: "Wired Headphones",
  },
  {
    img: soundbars,
    title: "Party Speakers",
  },
];
