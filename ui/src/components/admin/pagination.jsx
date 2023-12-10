import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "../../features/admin/adminSlice";
import { useState } from "react";

export default function Pagination({
  totalDocuments,
  totalPages,
  page,
  setPage,
}) {
  const dispatch = useDispatch();
  const perPage = 25;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  function handlePagination(page) {
    setPage(page);
    dispatch(fetchAllUsers(page));
  }

  function paginationNext(page) {
    if (page === totalPages) return;
    setPage(page + 1);
    dispatch(fetchAllUsers(page));
  }

  function paginationPrev(page) {
    if (page === 1) return;
    setPage(page - 1);
    dispatch(fetchAllUsers(page));
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 p-4 sm:ml-64">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => paginationPrev(page)}
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => paginationNext(page)}
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-black">
            Showing <span className="font-medium">{page * 25 - 25 + 1}</span> to{" "}
            <span className="font-medium">{page * 25}</span> of{" "}
            <span className="font-medium">{totalDocuments}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => paginationPrev(page)}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {pages.map((curr, index) => {
              if (page === curr)
                return (
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-indigo-900 focus:z-20 focus:outline-offset-0 md:inline-flex bg-indigo-600 text-white"
                    onClick={() => handlePagination(curr)}
                  >
                    {curr}
                  </a>
                );
              return (
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  onClick={() => handlePagination(curr)}
                >
                  {curr}
                </a>
              );
            })}

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => paginationNext(page)}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
