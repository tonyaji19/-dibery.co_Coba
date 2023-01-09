import React from "react";
import useSWR from "swr";
import Link from "next/link";
import Footer from "../components/Footer";
/*eslint-disable */
const product = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isloading } = useSWR(
    "http://localhost:3000/posts",
    fetcher
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isloading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-quicksand">
      <div
        id="categories"
        className="mt-12 text-center font-bold text-4xl text-gray-700 "
      >
        Products
      </div>
      <div className="items-stretch xl:mx-20 md:mx-2 sm:mx-28 grid md:grid-cols-2 lg:grid-cols-3 justify-items-between ">
        {data &&
          data.map((posts) => (
            <>
              <div className="">
                <div className=" cursor-pointer flex items-center text-center flex-col rounded-xl m-12 p-6 ">
                  <div className="relative flex justify-center items-center py-8 px-16">
                    <img
                      className="rounded-md"
                      src={posts.image}
                      alt={posts.title}
                    />
                    <a
                      href=""
                      className=" absolute top-2 right-4 flex justify-center items-center p-1 "
                    >
                      ⭐ 4.5
                    </a>
                  </div>
                  <div className="px-8 py-2">
                    <p className="font-semibold pb-3" key={posts.id}>
                      {posts.title}
                    </p>
                    <div>
                      <p>{posts.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default product;
