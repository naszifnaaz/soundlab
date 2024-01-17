import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/user/userSlice";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex p-2 bg-white border rounded-lg shadow-md sm:w-full md:w-[48%] lg:w-[30%] min-w-full lg:min-w-0">
      <div className="w-1/3">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover rounded-md min-w-full"
          onClick={() => navigate(`/products/${product._id}`)}
        />
      </div>

      <div className="w-2/2 px-4">
        <p className="text-sm font-normal mb-1">
          ⭐{product.rating} | {product.reviews} ✅
        </p>
        <p
          className="font-bold text-lg mb-2"
          onClick={() => navigate(`/products/${product._id}`)}
        >
          {product.title}
        </p>
        <div className="flex items-center mb-2">
          <span className="mr-2 font-bold text-xl">${product.price}</span>
          <span className="mr-2 font-normal line-through text-sm text-gray-500">
            $2,499
          </span>
          <span className="text-green-600 font-bold">{product.offer}% off</span>
        </div>
        <div className="flex space-x-2">
          {/* Example product features/tags */}
          {["Noise Cancellation"].map((feature, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
        <button
          className="mt-4 mb-2 rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700 focus:outline-none focus:ring focus:border-orange-700"
          onClick={() => dispatch(addToCart(product))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
