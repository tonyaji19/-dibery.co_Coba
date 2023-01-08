import React from "react";
import Link from "next/link";

export const Hero = () => {
  return (
    // test
    <div className="dark:bg-gray-900">
      <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-10 py-2 2xl:mx-auto 2xl:container">
        <div className="z-2 relative lg:w-1/2">
          <div className="hidden dark:bg-gray-800 bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
            <div className="w-full lg:w-auto lg:-mr-32">
              <img
                src="/Hotpot.png"
                alt="image with decent chairs"
                className="w-full relative z-2 lg:pl-20 px-6 py-14"
              />
            </div>
          </div>

          <div className="absolute top-0 dark:bg-gray-800 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
          <div className="w-full h-full lg:hidden">
            <img
              src="/Hotpot.png"
              alt="image with decent chairs"
              className="w-full relative z-2 sm:hidden lg:pl-20 md:px-6 py-5 md:py-14"
            />
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
          <div>
            <h1 className="font-quicksand font-extrabold dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-5xl sm:text-4xl text-4xl  text-gray-800 capitalize">
              Handcrafted Small Leather Goods
            </h1>
            <p className="font-quicksand dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">
              Get inspired by our curated selection of luxiwood interiors. We
              hope get inspired to have luxiwood interior yourself. You’ll find
              tips here where you can buy a lot of cool furniture,decorations,
              plants, etc.
            </p>
            {/* <Link
              className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center"
              href="/#categories"
            >
              coba
            </Link> */}
            <Link
              href="/#categories"
              className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-[10em] w-[10em] mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center"
            >
              Explore
              <div className="ml-2 mt-0.5">
                <svg
                  className="fill-stroke"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33325 8H12.6666"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33301L12.6667 7.99967"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // bg-[url('/hotpot.png')]
    // <div className=" mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-full md:px-20 sm:py-10 md:py-20 lg:py-30 bg-cover bg-[url('/hotpot.png')]  -z-20">
    //   <div className="max-w-xl sm:mx-auto lg:max-w-2xl ">
    //     <div className="flex flex-col mb-16 sm:text-center sm:mb-0 ">
    //       <a href="/" className="mb-6 sm:mx-auto">
    //         <div className="flex items-center justify-center ">
    //           <img
    //             class="w-14 rounded-full "
    //             src="/diberylogo.png"
    //             alt="logo"
    //           />
    //         </div>
    //       </a>
    //       <div className="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
    //         <h2 className="max-w-lg mb-8 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
    //           <span className="relative inline-block  text-white">
    //             <svg
    //               viewBox="0 0 52 24"
    //               fill="currentColor"
    //               className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
    //             >
    //               <defs>
    //                 <pattern
    //                   id="e77df901-b9d7-4b9b-822e-16b2d410795b"
    //                   x="0"
    //                   y="0"
    //                   width=".135"
    //                   height=".30"
    //                 >
    //                   <circle cx="1" cy="1" r=".7" />
    //                 </pattern>
    //               </defs>
    //               <rect
    //                 fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
    //                 width="52"
    //                 height="24"
    //               />
    //             </svg>
    //             <span className="relative text-black">The</span>
    //           </span>{" "}
    //           markquick, brown fox jumps over a lazy dog
    //         </h2>
    //         <p className="text-base text-white md:text-lg ">
    //           Sed ut spanperspiciatis unde omnis iste natus error sit voluptatem
    //           accusantium doloremque rem aperiam, eaque ipsa quae.
    //         </p>
    //       </div>
    //       <div>
    //         <a
    //           href="/"
    //           className=" inline-flex items-center justify-center h-12 px-6 sm:px-4 sm:h-11 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
    //         >
    //           Explore
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
