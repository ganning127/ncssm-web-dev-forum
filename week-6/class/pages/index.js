import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";
import { Countries } from "../components/Countries";
export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World!</title>
      </Head>

      <NavBar />

      <div className="container mx-auto px-4">
        <Countries />
      </div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
}
