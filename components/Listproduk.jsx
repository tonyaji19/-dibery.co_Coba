import React from "react";
import useSWR from "swr";
import Link from "next/link";

const Listproduk = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isloading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isloading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div
        id="categories"
        className="mt-12 text-center font-bold text-4xl text-gray-700 "
      >
        Products
      </div>
      <div className="xl:mx-20 md:mx-2 sm:mx-28 grid md:grid-cols-2 lg:grid-cols-3 justify-items-between items-center">
        {data &&
          data.map((user) => (
            <>
              <div className="">
                <div className="flex items-center text-center flex-col rounded-xl m-2 p-12 ">
                  <div className="relative flex justify-center items-center py-12 px-20">
                    <img src={user.image} alt={user.title} />
                    <a
                      href=""
                      className="hover:bg-orange-400 absolute top-2 right-4 flex justify-center items-center p-1 bg-orange-600 rounded-full"
                    >
                      <img src="/shopeelogo.svg" width={30} />
                    </a>
                    <a
                      href=""
                      className="hover:bg-green-400 absolute top-2 right-14 flex justify-center items-center p-1 bg-green-500 rounded-full"
                    >
                      <img src="/tokopedialogo.svg" width={30} />
                    </a>
                  </div>
                  <div className="p-3 ">
                    <p className="font-semibold pb-3" key={user.id}>
                      {user.title}
                    </p>
                    <div>
                      <p>Rp.{user.price}</p>
                      <p>⭐ {user.rating.rate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Listproduk;
