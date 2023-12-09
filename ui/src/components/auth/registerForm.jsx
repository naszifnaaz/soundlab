import { useState } from "react";
import logo from "../../assets/favicon.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../features/user/userSlice";
import { Spinner } from "../commons/Spinner";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.user.loading);

  // Register Form Handling
  const initState = {
    fullname: "",
    email: "",
    password: "",
    role: "user",
  };

  const [formState, setFormState] = useState(initState);

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(userRegister(formState));
    setFormState(initState);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-15 w-auto" src={logo} alt="Sound Lab" />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Your Account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="fullname"
                  name="fullname"
                  type="text"
                  autoComplete="current"
                  value={formState.fullname}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formState.email}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={formState.password}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? <Spinner /> : "Create Account"}
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <p className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
              <Link to={"/login"}>Login here!</Link>
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
