/**
 * External dependencies.
 */
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from "next/app";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Internal dependencies.
 */
import "../styles/globals.css";
import store from '../store';
import axiosDefault from "../utils/axios-default";
import 'jquery';

axiosDefault();

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }

  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
