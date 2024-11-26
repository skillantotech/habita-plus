"use client";
import Logo from "../../../assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <div className="h-20 w-full flex flex-row justify-between items-center shadow-md">
        <div className="flex flex-row items-center gap-4 ml-[80px]">
          <div className="ml-[15px]">
            <Image
              src={Logo}
              alt="logo"
              height={45}
              width={45}
              className="rounded-full"
            />
          </div>
          <div className=" text-darkTeal text-xl font-sans subpixel-antialiased font-medium hover:text-turquoise ">
            HABITATPLUS
          </div>
        </div>

        <div className="flex flex-row justify-end items-center mr-[80px] gap-7">
          <div className="text-darkTeal text-lg font-sans subpixel-antialiased font-medium hover:text-turquoise nav-item">
            Home
          </div>

          <Link href="/services">
            <div className=" text-darkTeal text-lg font-sans subpixel-antialiased font-medium hover:text-turquoise nav-item">
            Services
            </div>
          </Link>
          
          <Link href="/pricing">
            <div className=" text-darkTeal text-lg font-sans subpixel-antialiased font-medium hover:text-turquoise nav-item">
              Pricing
            </div>
          </Link>
          
          <div className="  text-darkTeal text-lg font-sans subpixel-antialiased font-medium hover:text-turquoise nav-item">
            About Us
          </div>
          <div className="text-darkTeal text-lg font-sans subpixel-antialiased font-medium hover:text-turquoise nav-item">
            Contact
          </div>
          <div>
            {isAuthenticated ? (
              <Link href="/user">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link href="/login">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  LOGIN
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
