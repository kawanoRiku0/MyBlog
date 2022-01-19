import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "components/layouts/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className=" fixed top-0 w-full">
        <Header />
      </div>
      <div className="mt-[68px] bg-gray-50 min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
