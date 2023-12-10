import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deactivateUser } from "../../features/admin/adminSlice";

export const UserTable = ({ users }) => {
  const [deactivateModal, setDeactivateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const dispatch = useDispatch();

  function handleDeactivateUser() {
    dispatch(deactivateUser(selectedUser));
  }
  return (
    <div className="p-4 sm:ml-64">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Avatar
              </th>
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Role
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
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
                      src="https://i.pravatar.cc/300"
                      alt="avatar"
                      className="rounded-full w-8"
                    />
                  </th>
                  <td class="px-6 py-4">{user.fullname}</td>
                  <td class="px-6 py-4">{user.email}</td>
                  <td class="px-6 py-4">
                    {user.role === "user" ? (
                      <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                        {user.role}
                      </span>
                    ) : (
                      <span class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                        {user.role}
                      </span>
                    )}
                  </td>
                  <td class="px-6 py-4">
                    {user.verified ? (
                      <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        Verified
                      </span>
                    ) : (
                      <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                        Not Verified
                      </span>
                    )}
                  </td>
                  <td class="px-6 py-4">
                    <div className="flex items-center justify-evenly text-xl gap-2 ">
                      <button
                        data-modal-hide="popup-modal"
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                        onClick={() => {
                          setDeactivateModal(true);
                          setSelectedUser(user._id);
                          console.log(user);
                        }}
                      >
                        <FaTrash className="mr-2" />
                        Deactivate User
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {deactivateModal ? (
        <div
          id="popup-modal"
          tabIndex="-1"
          class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="fixed top-8 right-10 bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
                onClick={() => setDeactivateModal(false)}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="p-4 md:p-5 text-center">
                <svg
                  class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to Deactivate
                  <span className="text-red-500 font-bold ml-2">
                    {selectedUser.fullname}
                  </span>
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                  onClick={() => handleDeactivateUser(selectedUser)}
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => setDeactivateModal(false)}
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
