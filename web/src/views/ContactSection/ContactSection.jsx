// ContactSection.jsx
import React from 'react';

function ContactSection() {
  return (
    <div className="py-10 mx-auto mt-10 mb-10 text-center bg-blue-100 shadow-lg rounded-3xl max-w-7xl">
      <h2 className="text-2xl font-semibold">Request a demo.</h2>
      <p className="my-5 text-4xl font-bold">
        Sounds interesting? Let&#39;s get in touch!
      </p>
      <button className="px-6 py-3 mt-4 text-white bg-blue-500">
        Contact us
      </button>
    </div>
  );
}

export default ContactSection;
