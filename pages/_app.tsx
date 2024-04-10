import Navbar from "@/components/Navbar";
import FullPageSpinner from "@/components/utils/FullPageSpinner";
import { CartArrayProvider } from "@/context/CartContext";
import { LoaderProvider } from "@/context/LoaderContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import { Toaster } from "react-hot-toast";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "100", "300", "900", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoaderProvider>
        <CartArrayProvider>
          <main className={lato.className}>
            <Navbar />
            <Component {...pageProps} />
            <Toaster
              toastOptions={{
                style: {
                  backgroundColor: "orangered",
                  color: "white",
                },
              }}
            />
            <FullPageSpinner />
          </main>
        </CartArrayProvider>
      </LoaderProvider>
    </>
  );
}
