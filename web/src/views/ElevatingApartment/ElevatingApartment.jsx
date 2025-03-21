"use client";
import React from "react";
import Image from "next/image";
import LocalImage from "../../../assets/images/photo.jpeg";

function ElevatingApartment() {
  return (
    <div className="flex items-center p-6 mx-auto mt-10 space-x-6 rounded-lg shadow-lg bg-gray-50 max-w-7xl">
      {/* Center - Text Content */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold">Elevating Apartment Living</h2>
        <p className="mt-6 text-lg text-gray-600">
          As an innovative apartment management company, we strive to provide our clients
          with the most effective, efficient, and modern solutions. We believe that
          apartment living should be convenient, comfortable, and secure.
        </p>
        <button className="px-6 py-2 mt-6 text-white bg-blue-500 rounded-md">
          More Details
        </button>
      </div>

      {/* Right Side - Image with overlay text */}
      <div className="relative flex-1">
        {/* Image */}
        <div className="relative w-full h-80">
          <Image
            src={LocalImage}
            alt="Apartment Living"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Overlay - Vision Icon and Text */}
        <div className="absolute p-4 bg-white rounded-lg shadow-md top-4 left-4 bg-opacity-90">
          <div className="flex items-center">
            <div className="p-2 bg-blue-500 rounded-full">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
              </svg>
            </div>
            <div className="ml-2">
              <h3 className="text-lg font-semibold">Our Vision</h3>
              <p>1-Click Installation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElevatingApartment;
