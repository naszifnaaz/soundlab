import { FaStar } from "react-icons/fa";

export const DailyDealsCard = ({ product }) => {
  return (
    <div className="m-2 p-2 flex flex-col flex-wrap justify-center items-center  gap-3 bg-slate-100 rounded-2xl relative">
      <div>
        <img
          className=" rounded-xl w-60 hover:grayscale-0 hover:saturate-200 hover:drop-shadow-2xl hover:backdrop-brightness-2xl"
          src={product.img}
          alt={product.name}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {product.offer} OFF
        </span>
      </div>

      <div className="bg-slate-200 w-full  ">
        <p className="text-center mt-2 font-semibold">{product.name}</p>
        <div className="text-center">
          <p>
            <span className="text-3xl font-bold text-slate-900 mr-3">
              {product.price}
            </span>
            <span className="text-sm text-slate-900 line-through">
              {product.striked_price}
            </span>
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              ⭐ 5.0
            </span>
          </p>
          <a
            href="#"
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-3 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
