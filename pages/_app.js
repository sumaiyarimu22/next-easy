import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My next app</title>
        <meta name="description" content="This is a test next app." />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
