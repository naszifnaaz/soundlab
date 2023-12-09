import { DailyDealsCard } from "./dailyDealsCard";

export const DailyDeals = () => {
  return (
    <div className="w-9/12 m-auto">
      <h2 className="text-2xl mt-5 ml-5 lg:my-5">
        Explore{" "}
        <span className="text-2xl font-semibold link link-underline link-underline-black text-black ">
          Bestsellers
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5">
        {DailyDealsProducts.map((product, index) => {
          return <DailyDealsCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

const DailyDealsProducts = [
  {
    rating: "5.0",
    img: "https://www.boat-lifestyle.com/cdn/shop/products/main-img-1_1_300x.png?v=1615965621",
    name: "Airdopes Alpha",
    price: "₹999",
    striked_price: "₹2,499",
    offer: "71%",
  },
  {
    rating: "4.0",
    img: "https://www.boat-lifestyle.com/cdn/shop/products/main---1_14fdb862-156c-4161-a402-b4e56a464ec1_300x.png?v=1678952224",
    name: "Immortal 1000D",
    price: "₹2,999",
    striked_price: "₹5,990",
    offer: "50%",
  },
  {
    rating: "4.5",
    img: "https://www.boat-lifestyle.com/cdn/shop/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159",
    name: "Rockerz 450",
    price: "₹1,999",
    striked_price: "₹3,990",
    offer: "50%",
  },
  {
    rating: "5.0",
    img: "https://www.boat-lifestyle.com/cdn/shop/products/main1_2b670523-0832-488c-9344-897907a84a79_300x.png?v=1662547691",
    name: "Xtend Call Plus",
    price: "₹2,299",
    striked_price: "₹8,499",
    offer: "73%",
  },
];
