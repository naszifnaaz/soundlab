import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../features/admin/adminSlice";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.admin.users);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
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
                    <div className="flex items-center justify-evenly text-xl gap-2">
                      <FaEdit />
                      <FaTrash />
                      <IoEyeSharp />
                    </div>
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
