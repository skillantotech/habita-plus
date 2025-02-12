// import React from 'react'
// import { FaArrowRight } from "react-icons/fa";
// import Image from 'next-image/image'

// function Service() {
//   return (
//     <>
//       <div className='text-center'>
//         <p className='text-5xl'>Services</p>
//         <div className='mx-auto w-[49rem] max-w-full text-center'>
//           <p className='text-2xl'>Choose the pricing option that works best for your apartment rental needs. Experience exceptional quality and reliable service with our transparent pricing structure.</p>
//         </div>
//       </div>

//       <div className='flex justify-center w-full gap-20 mt-24'>
//         {/* Card One */}
//         <div className='p-2 text-center border border-black w-60'>
//           {
//             <img className='w-64 rounded-lg h-60' src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400" alt="CardImg" />
//           }
//           {/* <img className='w-full rounded-lg h-60' src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400" alt="CardImg" /> */}

//           <p className='text-2xl'>Society Management</p>
//           <p className='text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatibus nihil ut. Tenetur sapiente nisi eos mollitia consectetur sint incidunt quaerat, laudantium laboriosam nobis molestiae debitis magni dolore aliquam consequatur. Doloremque, quas eius nesciunt, nihil tenetur cum dignissimos a laudantium eveniet reiciendis quia beatae distinctio voluptatem quod cupiditate? Laboriosam!</p>

//           <div className="flex justify-center mt-3">
//             <button type="button">More Details</button>
//             <div className='mt-1 ml-2'>
//               <FaArrowRight />
//             </div>
//           </div>
//         </div>
//         {/* Card Two */}
//         <div className='p-2 text-center border border-black w-60'>
//           {
//             <img className='w-64 rounded-lg h-60' src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400" alt="CardImg" />
//           }
//           {/* <img className='w-64 rounded-lg h-60' src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400" alt="CardImg" /> */}

//           <p className='text-2xl'>Society Management</p>
//           <p className='text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatibus nihil ut. Tenetur sapiente nisi eos mollitia consectetur sint incidunt quaerat, laudantium laboriosam nobis molestiae debitis magni dolore aliquam consequatur. Doloremque, quas eius nesciunt, nihil tenetur cum dignissimos a laudantium eveniet reiciendis quia beatae distinctio voluptatem quod cupiditate? Laboriosam!</p>

//           <div className="flex justify-center mt-3">
//             <button type="button">More Details</button>
//             <div className='mt-1 ml-2'>
//               <FaArrowRight />
//             </div>
//           </div>
//         </div>

//         {/* Card Three */}
//         <div className='p-2 text-center border border-black w-60'>
//           {
//             <img className='w-full rounded-lg h-60' src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400" alt="CardImg" />
//           }
//           {/* <img className='w-64 rounded-lg h-60' src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400" alt="CardImg" /> */}

//           <p className='text-2xl'>Society Management</p>
//           <p className='text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatibus nihil ut. Tenetur sapiente nisi eos mollitia consectetur sint incidunt quaerat, laudantium laboriosam nobis molestiae debitis magni dolore aliquam consequatur. Doloremque, quas eius nesciunt, nihil tenetur cum dignissimos a laudantium eveniet reiciendis quia beatae distinctio voluptatem quod cupiditate? Laboriosam!</p>

//           <div className="flex justify-center mt-3">
//             <button type="button">More Details</button>
//             <div className='mt-1 ml-2'>
//               <FaArrowRight />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="py-10 mx-auto mt-10 mb-10 text-center bg-blue-100 shadow-lg rounded-3xl max-w-7xl">
//         <h2 className="text-2xl font-semibold">Request a demo.</h2>
//         <p className="my-5 text-4xl font-bold">Sounds interesting? Let's get in touch!</p>
//         <button className="px-6 py-3 mt-4 text-white bg-blue-500">
//           Sign Up
//         </button>
//       </div>



//     </>
//   )
// }

// export default Service;

"use client";
import React from "react";
import Image from "next/image";
import LocalImage from "../../../assets/images/photo.jpeg"; // Import local image correctly
import { FaArrowRight } from "react-icons/fa";

function Service() {
  return (
    <>
      <div className="text-center">
        <p className="text-5xl">Services</p>
        <div className="mx-auto w-[49rem] max-w-full text-center">
          <p className="text-2xl">
            Choose the pricing option that works best for your apartment rental
            needs. Experience exceptional quality and reliable service with our
            transparent pricing structure.
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full gap-20 mt-24">
        {/* Card One - Using Local Image */}
        <div className="p-2 text-center border border-black w-60">
          <Image
            src={LocalImage} // Correct way to use a local image
            alt="Card Image"
            width={256}
            height={240}
            className="rounded-lg"
          />
          <p className="text-2xl">Society Management</p>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos voluptatibus nihil ut. Tenetur sapiente nisi eos
            mollitia consectetur sint incidunt quaerat.
          </p>
          <div className="flex justify-center mt-3">
            <button type="button">More Details</button>
            <div className="mt-1 ml-2">
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Card Two - Using External Image */}
        <div className="p-2 text-center border border-black w-60">
          <Image
            src={LocalImage}
            alt="Card Image"
            width={256}
            height={240}
            className="rounded-lg"
          />
          <p className="text-2xl">Society Management</p>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos voluptatibus nihil ut. Tenetur sapiente nisi eos
            mollitia consectetur sint incidunt quaerat.
          </p>
          <div className="flex justify-center mt-3">
            <button type="button">More Details</button>
            <div className="mt-1 ml-2">
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Card Three - Using External Image */}
        <div className="p-2 text-center border border-black w-60">
          <Image
            src={LocalImage}
            alt="Card Image"
            width={256}
            height={240}
            className="rounded-lg"
          />
          <p className="text-2xl">Society Management</p>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos voluptatibus nihil ut. Tenetur sapiente nisi eos
            mollitia consectetur sint incidunt quaerat.
          </p>
          <div className="flex justify-center mt-3">
            <button type="button">More Details</button>
            <div className="mt-1 ml-2">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-10 mx-auto mt-10 mb-10 text-center bg-blue-100 shadow-lg rounded-3xl max-w-7xl">
        <h2 className="text-2xl font-semibold">Request a demo.</h2>
        <p className="my-5 text-4xl font-bold">
          Sounds interesting? Let&apos;s get in touch!
        </p>
        <button className="px-6 py-3 mt-4 text-white bg-blue-500">
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Service;
