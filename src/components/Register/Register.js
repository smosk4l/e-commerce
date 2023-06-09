import { Link } from "react-router-dom";
import formSubmitValidation from "../../utils/formSubmitValidation";
import Navbar from "../Navbar/Navbar";
function Register() {
  return (
    <div className="w-screen flex justify-center pb-12 px-6 lg:px-8 ">
      <div className="max-w-[1440px] shadow-sm pb-12">
        <Navbar />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Already registered?
          <Link to="/login">
            <span className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              {` Sign in`}
            </span>
          </Link>
        </p>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form
              className="mb-0 space-y-6"
              method="POST"
              onSubmit={formSubmitValidation}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className=""
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className=""
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className=""
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input
                  id="terms-and-privacy"
                  name="terms-and-privacy"
                  type="checkbox"
                  required
                />
                <label
                  htmlFor="terms-and-privacy"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I agree to the
                  <Link to={"/error"}>
                    <span className="text-indigo-600 hover:text-indigo-500">
                      {` Terms `}
                    </span>
                  </Link>
                  and
                  <Link
                    to={"/error"}
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    {` Privacy Policy`}
                  </Link>
                  .
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  // onClick={(e) => e.preventDefault()}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
