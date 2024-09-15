import { Sidebar } from "../components/admin/Sidebar";
import Pagination from "../components/admin/pagination";
import { Spinner } from "../components/commons/spinner";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchAllProducts } from "../features/admin/adminSlice";
import { ProductTable } from "../components/admin/productTable";

export const ProductConsole = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.admin.loading);
  const products = useSelector((store) => store.admin.products);
  const totalDocuments = useSelector((store) => store.admin.totalDocuments);
  const totalPages = useSelector((store) => store.admin.totalPages);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllProducts(page));
  }, []);

  return (
    <div>
      <Sidebar />
      {isLoading ? (
        <div className="w-full h-80 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <ProductTable products={products} />
      )}
      <Pagination
        totalDocuments={totalDocuments}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};
