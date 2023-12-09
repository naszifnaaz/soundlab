import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const AvatarMenu = () => {
  const dispatch = useDispatch();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function handleLogout() {}

  return (
    <Menu as="div" className="relative ml-3 mr-2">
      <div>
        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.pravatar.cc/300"
            alt=""
          />
          <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {true ? (
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={"/admin/dashboard"}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Admin Dashboard
                </Link>
              )}
            </Menu.Item>
          ) : null}
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Your Orders
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
                onClick={handleLogout}
              >
                Logout
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
