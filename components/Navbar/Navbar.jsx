import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { VscSignIn } from "react-icons/vsc";
import { MdOutlineLightMode } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

/*eslint-disable */
const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Popover
      className={
        " mx-auto flex items-center xl:px-28 px-8 h-24 bg-white text-gray-700 dark:text-white dark:bg-gray-900"
      }
    >
      <a class="text-2xl flex items-center font-bold font-heading " href="/">
        <img class="h-9 mr-3 rounded-lg" src="/diberylogo.png" alt="logo" />
        dibery.co
      </a>
      <div className="grow ">
        <div className="hidden pl-10 sm:flex items-center justify-start  font-heading gap-2 md:gap-4 xl:gap-6 font-inter font-light">
          <Link href="/">Home</Link>
          <Link href="product">Product</Link>
          <Link href="about">About</Link>
          <Link href="faq">FAQs</Link>
        </div>
      </div>
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ">
          <span className="sr-only">Open menu</span>
          <FaHamburger className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Overlay className=" sm:hidden fixed inset-0 bg-black opacity-40" />
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 z-10 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="rounded-md bg-white font-black shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl text-black ">dibery.co</h1>
                <div className="mr-1 -mt-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus-ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-6 text-black font-medium">
                  <Link
                    className="hover:text-gray-600 focus:outline-none focus:rounded-md focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="/"
                  >
                    Home
                  </Link>

                  <Link
                    className=" hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="about"
                  >
                    About
                  </Link>
                  <Link
                    className=" hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="category"
                  >
                    Category
                  </Link>
                  <Link
                    className="hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="collections"
                  >
                    Collections
                  </Link>
                  <Link
                    className="hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="faq"
                  >
                    FAQ
                  </Link>
                  <Link
                    className="hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    href="contact"
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>
              <div className="mt-6 flex flex-col items-center gap-2">
                <Link
                  className="rounded-md flex  px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                  href="signup"
                >
                  <VscSignIn className="text-xl mr-2 -ml-1 " />
                  Sign up
                </Link>
                <Link
                  className="rounded-md flex bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                  href="login"
                >
                  <BiLogIn className="text-xl mr-2 -ml-2" />
                  Login
                </Link>
                <div className=" sm:inline-flex ">
                  <div class="relative md:block">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BiSearch className="text-gray-700 text-xl" />
                    </div>
                    <input
                      type="text"
                      class=" border border-gray-300 font-extralight text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block   pl-12 p-2 "
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>

      <div className="hidden sm:inline-flex xl:flex sm:space-x-2 xl:space-x-4  items-center">
        <div class="relative mr-[4px] md:mr-0 md:block">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BiSearch className="text-gray-700 text-xl" />
          </div>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block xl:w-[20em] sm:w-full pl-12 p-2 "
            placeholder="Search..."
          />
        </div>
        <a>
          <MdOutlineLightMode
            class="flex items-center text-2xl hover:text-gray-500 cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            href="#"
          />
        </a>
      </div>
    </Popover>
  );
};

export default Navbar;
