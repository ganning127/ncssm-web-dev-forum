import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";
import { Countries } from "../components/Countries";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { useState } from "react";
export default function Pricing() {
  const [posts, setPosts] = useState([]);
  const loadData = async () => {
    console.log("loading data...");
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();

    setPosts(data);
  };
  return (
    <>
      <Head>
        <title>Pricing - Hello World!</title>
      </Head>

      <NavBar />

      <div className="container mx-auto px-4">
        <HeadingWithDesc>Pricing</HeadingWithDesc>

        <div className="text-center mt-5">
          <button
            className="rounded-full bg-cyan-500 text-white font-semibold px-4 py-1"
            onClick={loadData}
          >
            Load Data
          </button>
        </div>

        {posts && (
          <div className="grid grid-cols-3 gap-8">
            {posts.map((post) => {
              return (
                <>
                  <div className="shadow-md p-4 rounded-md" key={post.userId}>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p className="text-md text-gray-700 mt-2">{post.body}</p>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
}
