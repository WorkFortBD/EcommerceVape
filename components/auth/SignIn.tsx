/**
 * External dependencies.
 */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

/**
 * Internal Dependencies
 */
import { isSignedIn, postLoginData } from "../../store/auth/action";
import { getUserDataAction } from "../../store/users/action";

export default function SignIn(history, props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  // const { status,message,isLoading } = useSelector((state: IRootReducer) => state.auth);
  const status = useSelector((state) => state.auth.isSignedIn);
  const message = useSelector((state) => state.auth.message);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const { userData } = useSelector((state) => state.user);
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  useEffect(() => {
    dispatch(isSignedIn());
    if (status) {
      dispatch(getUserDataAction());
      router.push("/");
    }
  }, [status, message, dispatch, history]);
  const loginPost = async (values) => {
    dispatch(postLoginData(values));
  };

  const onSubmit = (values) => {
    loginPost(values);
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Required")
      .test(
        "email&pass",
        "Enter a valid phone number or email address",
        (value) => {
          if (value === undefined || value === null) return false;

          const emailRegex =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          const phoneRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;

          let isValidEmail = emailRegex.test(value.trim());
          // let isValidPhone = phoneRegex.test(value.trim());

          if (!isValidEmail) return false;
          return true;
        }
      ),
    password: yup
      .string()
      .min(6, "Minimum 6 characters required")
      .required("Required")
      .test("password", "space not allowed", (value) => {
        if (value === undefined || value === null) return false;

        if (/\s/g.test(value)) return false;

        return true;
      }),
  });

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-lg p-5">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {() => {
            return (
              <Form className="bg-white shadow-lg rounded px-5 pt-3 pb-8 mb-4">
                <div className="flex justify-center items-center cursor-pointer py-2">
                  <a href="/">
                    <img
                      src="/images/logos/logo.svg"
                      className="mr-3 h-12 md:h-16"
                      alt=""
                    />
                  </a>
                </div>

                <div className="mt-3">
                  <label
                    htmlFor="number"
                    className="block text-gray-700  font-bold mb-2"
                  >
                    Email
                    <sub className="text-2xl text-red-500"> *</sub>
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="abc@email.com"
                    name="email"
                  />
                  <ErrorMessage name="email" component={ValidationError} />
                </div>
                <div className="mb-1">
                  <label
                    htmlFor="number"
                    className="block text-gray-700  font-bold mb-2"
                  >
                    Password
                    <sub className="text-2xl text-red-500"> *</sub>
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="******************"
                  />
                  <div
                    className="account_input_group_prepend"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword === false ? (
                      <span>
                        <i className="far fa-eye-slash"></i>
                      </span>
                    ) : (
                      <span>
                        <i className="far fa-eye"></i>
                      </span>
                    )}
                  </div>
                  {/* <ErrorMessage name="password" component={ ValidationError } /> */}
                </div>

                <div className="mt-1">
                  <Field
                    className="mr-2"
                    type="checkbox"
                    id="remember"
                    name="remember"
                  />
                  <span className="">Remember me</span>
                </div>
                {isLoading == true ? (
                  <button
                    disabled
                    className="shadow-md w-full mt-3 py-2 uppercase bg-primary hover:bg-primary-light text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Signing In....
                  </button>
                ) : (
                  <button
                    className="shadow-md w-full mt-3 py-2 uppercase bg-primary hover:bg-primary-light text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign in
                  </button>
                )}
                <div className="text-center">
                  <a
                    className="inline-block align-baseline font-bold px-2 py-1 rounded-md text-primary hover:text-primary-light"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <p className="text-primary mt-3 font-bold">
                  Don't have an account ?
                </p>
                <a href="/sign-up">
                  <button
                    className="border w-full mt-1 py-2 uppercase text-primary font-bold px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sing Up
                  </button>
                </a>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

function ValidationError(props) {
  return <small className="text-red-500">{props.children}</small>;
}
