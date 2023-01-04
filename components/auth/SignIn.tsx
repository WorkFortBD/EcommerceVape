/**
 * External dependencies.
 */
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

/**
 * Internal Dependencies
 */
import {isSignedIn, postLoginData } from "../../store/auth/action";
import { getUserDataAction } from "../../store/users/action";

export default function SignIn(history,props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  // const { status,message,isLoading } = useSelector((state: IRootReducer) => state.auth);
  const status = useSelector((state) => state.auth.isSignedIn);
	const message = useSelector((state) => state.auth.message);
	const isLoading = useSelector((state) => state.auth.isLoading);
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  useEffect(() => {
    dispatch(isSignedIn());
		if (status) {
      dispatch(getUserDataAction());
			router.replace('/');
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
              <Field className="mr-2" type="checkbox" id="remember" name="remember" />
              <span className="">Remember me</span>
            </div>

                <button
              className="shadow-md w-full mt-3 py-2 uppercase bg-primary hover:bg-primary-light text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
             {isLoading ? <span className="sr-only">Signing in...</span> : 'Sign in'}
            </button>
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
            } }
          </Formik>
        </div>
    </div>
  );
}

function ValidationError(props) {
  return <small className="text-red-500">{props.children}</small>;
}
