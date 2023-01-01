/**
 * External dependencies.
 */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";

/**
 * Internal Dependencies
 */
import { customerRegister, postLoginData } from "../../store/auth/action";
import { IRootReducer } from "../../interfaces/reducers";
import Timer from "../layouts/Timer";

const LOWERCASEREGEX = /(?=.*[a-z])/;
const UPPERCASEREGEX = /(?=.*[A-Z])/;
const NUMERICREGEX = /(?=.*[0-9])/;

let IS_VALID_OTP = false;

export default function SignIn(history, props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationStep, setValidationStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [resendOtp, setResendOtp] = useState(false);
  const [stepOneFormData, setStepOneFormData] = useState(null);
  const [otpExpireTime, setOtpExpireTime] = useState(0);
  const initialValues = {
    first_name: "",
    last_name: "",
    phone_no: "",
    email: "",
    password: "",
    password_confirmation: "",
    otp: "",
    offer: false,
    policy: true,
  };

  // useEffect(() => {
  //   if (status && message.length > 0) {
  //     router.replace("/");
  //   }
  // }, [status, history]);
  //  const loginPost = async (values) => {
  //    dispatch(postLoginData(values));
  //  };

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    try {
      if (validationStep === 0) {
        const formData = {
          email: values.email,
          first_name: values.first_name,
          last_name: values.last_name,
          phone_no: values.phone_no,
        };
        setStepOneFormData(formData);

        const data = await Axios.post(
          `auth/register`,
          formData
        );

        if (data.data.status) {
          toast("success", "OTP is sent to your phone number");
          setOtpExpireTime(data.data.data);
          setIsLoading(false);
          setValidationStep(1);
          actions.setTouched({});
          actions.setSubmitting(false);
        }
      }
      if (validationStep === 1) {
        const formData = {
          email: values.email,
          first_name: values.first_name,
          last_name: values.last_name,
          phone_no: values.phone_no,
          otp: values.otp,
          password: values.password,
          password_confirmation: values.password_confirmation,
        };

        customerRegister(formData)
          .then((data) => {
            if (data.data.status) {
              toast(
                "success",
                "Your account created successfully, Please Login."
              );
              window.location.replace("/sign-in");
            }
          })
          .catch((_) => {
            setIsLoading(false);
            actions.setTouched({});
            actions.setSubmitting(false);

            setIsLoading(false);
          });
      }
    } catch (error) {
      const { response } = error;
      setIsLoading(false);

      if (!response.data.errors) {
        toast("success", response.data.message);
        setValidationStep(1);
        setOtpExpireTime(response.data.data);
        actions.setTouched({});
        actions.setSubmitting(false);
        return;
      }

      const errors = Object.keys(response.data.errors);

      if (errors.length > 1) {
        toast("error", "Email and phone number already used.");
      } else {
        toast(
          "error",
          `${errors[0] === "email" ? "email" : "Phone number"} is already used.`
        );
      }
    }
  };

  const resendOtpApi = () => {
    setResendOtp(false);
    Axios.post("auth/register", stepOneFormData)
      .then((data) => {
        if (data.data.status) {
          toast("success", data.data.message);
          setOtpExpireTime(data.data.data);
        }
      })
      .catch((err) => {
        const { response } = err;
        if (!response.data.errors) {
          toast("success", response.data.message);
          setOtpExpireTime(response.data.data);
          return;
        }

        toast("error", "Something went wrong. Please refresh browser");
      });
  };

  const validationSchema = [
    yup.object().shape({
      first_name: yup
        .string()
        .required("Required")
        .min(2, "Name should be at least 2 characters")
        .max(40, "Up to 40 characters"),
      last_name: yup
        .string()
        .required("Required")
        .min(2, "Name should be at least 2 characters")
        .max(40, "Up to 40 characters"),
      phone_no: yup
        .string()
        .required("Required")
        .test("phone_no", "Please input a valid phone number", (value) => {
          const phoneRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;

          let isValidPhone = phoneRegex.test(value);

          if (!isValidPhone) return false;
          return true;
        }),
      email: yup.string().email("Please Input a valid email"),
      policy: yup
        .boolean()
        .oneOf([true], "You must accept the terms and condition."),
    }),
    yup.object().shape({
      otp: yup
        .string()
        .required("Required")
        .min(6, "Input 6 digit OTP")
        .max(6, "Input 6 digit OTP")
        .test(
          "otp-code",
          "Please input a valid OTP",
          async (value, context) => {
            if (value && !IS_VALID_OTP && value.length === 6) {
              try {
                const otpBody = {
                  otp: context.parent.otp,
                  phone_no: context.parent.phone_no,
                };

                const res = await Axios.post(`auth/check-otp`, otpBody);

                if (res.data.status) {
                  IS_VALID_OTP = true;
                  return Promise.resolve(true);
                } else {
                  return Promise.resolve(false);
                }
              } catch (error) {
                return Promise.resolve(false);
              }
            }

            if (value && value.length < 6) {
              IS_VALID_OTP = false;
            }

            return Promise.resolve(true);
          }
        ),
      password: yup
        .string()
        .required("Required")
        // .matches(LOWERCASEREGEX, 'At least one lowercase character required')
        // .matches(UPPERCASEREGEX, 'At least one uppercase character required')
        // .matches(NUMERICREGEX, 'At least one numeric value required')
        // .matches(NUMERICREGEX, 'At least one numeric value required')
        .min(8, "Minimum 8 characters required")
        .test("password", "space not allowed", (value) => {
          if (value === undefined || value === null) return false;

          if (/\s/g.test(value)) return false;

          return true;
        }),
      password_confirmation: yup
        .string()
        .oneOf(
          [yup.ref("password"), null],
          "Password confirmation does not match password!"
        )
        .required("Required"),
    }),
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-lg p-5">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema[validationStep]}
          validateOnMount
        >
          {() => {
            return (
              <Form className="bg-white shadow-lg rounded px-5 pt-3 pb-8 mb-4">
                {validationStep === 0 ? (
                  <>
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
                        First Name
                        <sub className="text-2xl text-red-500"> *</sub>
                      </label>
                      <Field
                        className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="first_name"
                        type="text"
                        placeholder="Muhammad"
                        name="first_name"
                      />
                      <ErrorMessage
                        name="first_name"
                        component={ValidationError}
                      />
                    </div>

                    <div className="mt-3">
                      <label
                        htmlFor="number"
                        className="block text-gray-700  font-bold mb-2"
                      >
                        Last Name
                        <sub className="text-2xl text-red-500"> *</sub>
                      </label>
                      <Field
                        className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="last_name"
                        type="text"
                        placeholder="Hafiz"
                        name="last_name"
                      />
                      <ErrorMessage
                        name="last_name"
                        component={ValidationError}
                      />
                    </div>

                    <div className="mt-3">
                      <label
                        htmlFor="number"
                        className="block text-gray-700  font-bold mb-2"
                      >
                        Phone No
                        <sub className="text-2xl text-red-500"> *</sub>
                      </label>
                      <Field
                        className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone_no"
                        type="text"
                        placeholder="abcd"
                        name="phone_no"
                      />
                      <ErrorMessage
                        name="phone_no"
                        component={ValidationError}
                      />
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
                  </>
                ) : (
                  <>
                    <div className="mb-1">
                      <label
                        htmlFor="otp"
                        className="block text-gray-700  font-bold mb-2"
                      >
                        OTP
                        <sub className="text-2xl text-red-500"> *</sub>
                      </label>
                      <Field
                        className="shadow appearance-none border rounded w-full px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="otp"
                        type="text"
                        name="otp"
                        placeholder="123456"
                      />
                      <ErrorMessage name="otp" component={ValidationError} />
                    </div>
                    <a href="/sign-up">
                      <button
                        className="border w-full mt-1 py-2 uppercase text-primary font-bold px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={resendOtpApi}
                        disabled={resendOtp ? false : true}
                        // style={{
                        //   backgroundColor: "var(--color-primary)",
                        //   color: "#fff",
                        // }}
                      >
                        Resend
                      </button>
                    </a>
                    <div className="col-12">
                      <div className="my-2">
                        <Timer
                          endDate={otpExpireTime}
                          cb={() => setResendOtp(true)}
                        />
                      </div>
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
                      <ErrorMessage
                        name="password"
                        component={ValidationError}
                      />
                    </div>

                    <div className="mb-1">
                      <label
                        htmlFor="number"
                        className="block text-gray-700  font-bold mb-2"
                      >
                        Confirm Password
                        <sub className="text-2xl text-red-500"> *</sub>
                      </label>
                      <Field
                        className="shadow appearance-none border rounded w-full px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password_confirmation"
                        type={showConfirmPassword ? "text" : "password"}
                        name="password_confirmation"
                        placeholder="******************"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                      <ErrorMessage
                        name="password_confirmation"
                        component={ValidationError}
                      />
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
                  </>
                )}

                <button
                  className="shadow-md w-full mt-3 py-2 uppercase bg-primary hover:bg-primary-light text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {isLoading ? (
                    <span className="sr-only">Signing in...</span>
                  ) : (
                    "Sign up"
                  )}
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
                  Already Have an Account?
                </p>
                <a href="/sign-in">
                  <button
                    className="border w-full mt-1 py-2 uppercase text-primary font-bold px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sing IN
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
