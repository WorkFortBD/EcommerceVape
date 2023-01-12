/**Internal Dependency */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Progress } from "flowbite-react";
import Link from "next/link";
import { formatCurrency } from "../../utils/currency";
import { getCartsAction } from "../../store/cart/action";
import { IRootReducer } from "../../interfaces/reducers";

/**External Dependency */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

type Props = {};

export default function CheckoutComponent({}: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { carts, totalPrice, totalQuantity } = useSelector(
    (state: IRootReducer) => state.carts
  );
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
  useEffect(() => {
    dispatch(getCartsAction());
  }, []);

  const onSubmit = async (values, actions) => {}
  // const validationSchema = [
  //   yup.object().shape({
  //     first_name: yup
  //       .string()
  //       .required("Required")
  //       .min(2, "Name should be at least 2 characters")
  //       .max(40, "Up to 40 characters"),
  //     last_name: yup
  //       .string()
  //       .required("Required")
  //       .min(2, "Name should be at least 2 characters")
  //       .max(40, "Up to 40 characters"),
  //     phone_no: yup
  //       .string()
  //       .required("Required")
  //       .test("phone_no", "Please input a valid phone number", (value) => {
  //         const phoneRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;

  //         let isValidPhone = phoneRegex.test(value);

  //         if (!isValidPhone) return false;
  //         return true;
  //       }),
  //     email: yup.string().email("Please Input a valid email"),
  //     policy: yup
  //       .boolean()
  //       .oneOf([true], "You must accept the terms and condition."),
  //   }),
  //   yup.object().shape({
  //     otp: yup
  //       .string()
  //       .required("Required")
  //       .min(6, "Input 6 digit OTP")
  //       .max(6, "Input 6 digit OTP")
  //       .test(
  //         "otp-code",
  //         "Please input a valid OTP",
  //         async (value, context) => {
  //           if (value && !IS_VALID_OTP && value.length === 6) {
  //             try {
  //               const otpBody = {
  //                 otp: context.parent.otp,
  //                 phone_no: context.parent.phone_no,
  //               };

  //               const res = await Axios.post(`auth/check-otp`, otpBody);

  //               if (res.data.status) {
  //                 IS_VALID_OTP = true;
  //                 return Promise.resolve(true);
  //               } else {
  //                 return Promise.resolve(false);
  //               }
  //             } catch (error) {
  //               return Promise.resolve(false);
  //             }
  //           }

  //           if (value && value.length < 6) {
  //             IS_VALID_OTP = false;
  //           }

  //           return Promise.resolve(true);
  //         }
  //       ),
  //     password: yup
  //       .string()
  //       .required("Required")
  //       // .matches(LOWERCASEREGEX, 'At least one lowercase character required')
  //       // .matches(UPPERCASEREGEX, 'At least one uppercase character required')
  //       // .matches(NUMERICREGEX, 'At least one numeric value required')
  //       // .matches(NUMERICREGEX, 'At least one numeric value required')
  //       .min(8, "Minimum 8 characters required")
  //       .test("password", "space not allowed", (value) => {
  //         if (value === undefined || value === null) return false;

  //         if (/\s/g.test(value)) return false;

  //         return true;
  //       }),
  //     password_confirmation: yup
  //       .string()
  //       .oneOf(
  //         [yup.ref("password"), null],
  //         "Password confirmation does not match password!"
  //       )
  //       .required("Required"),
  //   }),
  // ];
  return (
    
  );
}
