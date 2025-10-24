import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from 'react-toastify';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TaskContextProvider } from "@/contexts/TaskContext/TaskContextProvider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pomodoro Tasks</title>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon/favicon.png" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />

        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TaskContextProvider>
        <div className="min-h-screen flex flex-col text-primario text-center">
          <Header />
          <main className="flex-1 w-full mb-2">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </TaskContextProvider>
      <ToastContainer className="bg-gray-800 text-white rounded-md shadow-md" />
    </>
  );
}
