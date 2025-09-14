import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen grid grid-rows-[auto-1fr-auto] text-primario text-center 
                    lg:space-y-10 lg:mt-10">
      <Header />
      <main className="max-h-50 sm:max-h-60 md:max-h-80 lg:max-h-none xl:max-h-none p-0">
        <Component {...pageProps}/>     
      </main>
      <Footer />
    </div>
  );
}
