import { useEffect, useState } from "react";
import { Footer } from "../components/commons/footer";
import { NavBar } from "../components/commons/navbar";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../features/admin/adminSlice";
import Pagination from "../components/admin/pagination";
import { ProductCard } from "../components/products/productCard";
export const Products = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.admin.loading);
  const products = useSelector((store) => store.admin.products);
  const totalDocuments = useSelector((store) => store.admin.totalDocuments);
  const totalPages = useSelector((store) => store.admin.totalPages);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllProducts(page));
  }, [page]);

  return (
    <div>
      <NavBar />
      <div className="flex justify-between items-center gap-2 flex-wrap m-3">
        <div className="w-full lg:w-56">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Filter By</option>
            <option value="US">Earphones</option>
            <option value="CA">Headphones</option>
            <option value="FR">Neckbands</option>
            <option value="DE">Speakers</option>
          </select>
        </div>
        <div className="w-full lg:w-56">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Sort by</option>
            <option value="US">Name</option>
            <option value="CA">Price</option>
            <option value="FR">Reviews</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-evenly items-center">
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
      <Pagination
        totalDocuments={totalDocuments}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
      <Footer />
    </div>
  );
};
