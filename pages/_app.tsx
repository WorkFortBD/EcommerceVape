/**
 * External dependencies.
 */
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from "next/app";

/**
 * Internal dependencies.
 */
import "../styles/globals.css";
import store from '../store';

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
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
