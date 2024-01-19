import { useEffect } from "react";
import { Footer } from "../components/commons/footer";
import { NavBar } from "../components/commons/navbar";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../features/admin/adminSlice";
import { addToCart } from "../features/user/userSlice";

export const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.admin.selectedProduct);
  const isLoading = useSelector((store) => store.admin.isLoading);
  let INRFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const colorOptions = ["red", "blue", "green", "yellow", "purple"];

  useEffect(() => {
    dispatch(fetchProductById(params.id));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 m-2">
        <div className="max-w-screen-xl w-full mx-auto p-8 bg-white rounded-md shadow-lg overflow-hidden">
          <div className="flex md:flex-row flex-col">
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-1 md:ml-8 mt-8 md:mt-0">
              <p className="text-xs text-gray-700 my-2">
                ⭐ {product.rating} | {product.reviews} reviews ✅
              </p>
              <p className="text-4xl font-bold mb-2">{product.title}</p>
              <p className="text-xs text-gray-700">{product.desc}</p>
              <p className="text-2xl my-2">
                {INRFormatter.format(product.price)}
              </p>
              <p>
                <span className="line-through text-gray-600">
                  {INRFormatter.format(product.price)}
                </span>
                <span className="text-green-400 ml-2 font-semibold">
                  {product.offer}% off
                </span>
              </p>
              <p className="font-semibold text-md">
                Choose your color :{" "}
                <span className="text-sm text-gray-500 font-normal">
                  Blazing Red
                </span>
              </p>
              <div className="flex space-x-2 my-2">
                <div
                  className={`w-8 h-8 rounded-full cursor-pointer border border-gray-300  bg-red-600`}
                />
                <div
                  className={`w-8 h-8 rounded-full cursor-pointer border border-gray-300  bg-purple-600`}
                />
                <div
                  className={`w-8 h-8 rounded-full cursor-pointer border border-gray-300  bg-green-600`}
                />
                <div
                  className={`w-8 h-8 rounded-full cursor-pointer border border-gray-300  bg-yellow-600`}
                />
              </div>
              <div class="relative flex py-5 items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-green-400 text-sm">
                  Free Delivery
                </span>
                <div class="flex-grow border-t border-gray-400"></div>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => dispatch(addToCart(product))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
