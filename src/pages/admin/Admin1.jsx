import React from 'react';

const GetStarted = () => {
  return (
    <>
     <div className="flex items-center justify-between p-4 ">
        <div className="flex items-center flex-col">
        <img
          src="https://via.placeholder.com/50"
          alt="Logo"
          className="w-12 h-12 border rounded object-contain"
        />
          <span className="text-lg font-bold">Your Name</span>  {/* Replace with your actual name */}
        </div>
      </div>
    <div className="flex justify-between p-8">
      {/* Left Side - Main Content */}
      <div className="w-2/3 p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-center text-red-700">Ready to get started on Travelbeem!</h2>

        {/* Tell us about your service */}
        <div className="mb-4">
          <label htmlFor="serviceDescription" className="block text-lg font-bold text-black">
            Tell us about your service
          </label>
          <p className="text-xs text-gray-500">Make sure it matches the name on your govt ID</p>
          <textarea
            id="serviceDescription"
            name="serviceDescription"
            rows="4"
            className="mt-1 p-2 block w-full border rounded shadow-md"
            placeholder="Tell us about your service..."
          ></textarea>
        </div>

        {/* Make it stand out (Highlights) */}
        <div className="mb-4">
          <label htmlFor="highlights" className="block text-lg font-bold text-black">
            Make it stand out (Highlights)
          </label>
          <p className="text-xs text-gray-500">Make sure it matches the name on your govt ID</p>
          <textarea
            id="highlights"
            name="highlights"
            rows="4"
            className="mt-1 p-2 block w-full border rounded shadow-md"
            placeholder="Make it stand out..."
          ></textarea>
        </div>

        {/* Certifications section */}
        <div className="mb-4">
          <label htmlFor="certifications" className="block text-lg font-bold text-black">
            Certifications
          </label>
          <input
            type="file"
            id="certifications"
            name="certifications"
            className="mt-1 p-2 block w-full border rounded shadow-md"
          />
        </div>
      </div>

      {/* Right Side - Chat Bot Section */}
      <div className="w-1/3 bg-white p-8 rounded shadow-md h-screen">
        <h2 className="text-2xl font-bold mb-6 text-center">Get one-to-one guidance</h2>
        {/* 5 Questions */}
        <div className="mb-4 border-b-2 border-gray-300 pb-2">
          <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">1. How to decide pricing</p>
          <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">2. Improve reviews and get more orders</p>
          <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">3. Guidance on promotions and coupons</p>
          <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">4. How to provide better customer experience</p>
          <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">5. Customer trends this year</p>
        </div>

        {/* Input box */}
        <div className="mt-24">
          <label htmlFor="chatQuestion" className="block text-sm font-medium text-gray-700 rounded-full">
            Type your questions/query now
          </label>
          <input
            type="text"
            id="chatQuestion"
            name="chatQuestion"
            className="mt-1 p-2 block w-full border rounded shadow-md"
            placeholder="Type your questions/query now..."
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default GetStarted;
