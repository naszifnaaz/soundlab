import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Spinner } from "../commons/spinner";
import { useSelector } from "react-redux";

export const ProductTable = ({ products }) => {
  const isLoading = useSelector((store) => store.admin.loading);
  return (
    <div className="p-4 sm:ml-64">
      <div className="my-5 flex justify-end">
        <button
          type="submit"
          className="self-end justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-48"
        >
          {isLoading ? <Spinner /> : "Add Product"}
        </button>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Thumbnail
              </th>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Cateogry
              </th>
              <th scope="col" class="px-6 py-3">
                Lifestyle
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr
                  key={index}
                  class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      src={product.thumbnail}
                      alt="thumbnail"
                      className="rounded-full w-8"
                    />
                  </th>
                  <td class="px-6 py-4">{product.title}</td>
                  <td class="px-6 py-4">{product.category}</td>
                  <td class="px-6 py-4">{product.lifestyle}</td>
                  <td class="px-6 py-4">{product.price}</td>
                  <td>
                    <button className="mx-2">
                      <FaEdit />
                    </button>
                    <button className="mx-2">
                      <FaTrash />
                    </button>
                    <button className="mx-2">
                      <IoEyeSharp />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
