import { LifestyleCard } from "./lifestyleCard";

export const ShopByLifestyle = () => {
  return (
    <div className="w-9/12 m-auto">
      <h2 className="text-2xl mt-5 ml-5 lg:my-5">
        Shop by{" "}
        <span className="text-2xl font-semibold link link-underline link-underline-black text-black ">
          Lifestyle
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0.5">
        {LifeStyles.map((product, index) => {
          return <LifestyleCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

const LifeStyles = [
  {
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Fitness_Freak_2.png?v=1685083745",
    title: "For Fitness",
  },
  {
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349",
    title: "For Parties",
  },
  {
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745",
    title: "For Work",
  },
  {
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Entertainment_2.png?v=1685083746",
    title: "For Fun",
  },
  {
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_3.png?v=1685942349",
    title: "For Audiophiles",
  },
];
