import "../app/globals.css";

import type { AppProps } from 'next/app';
import Header from "../app/ui/components/navigation/Header";
import Footer from "../app/ui/components/navigation/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  );
}

export default MyApp;