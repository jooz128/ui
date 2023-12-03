import React, { useState } from 'react';
import Image from '../../assets/dragrectanlge.png'
import ChatBox from '../../components/chatbox/ChatBox';
import BrandName from '../../components/BrandName/BrandName';
import {  Bars3BottomRightIcon } from '@heroicons/react/24/solid';

const ReorderPage = () => {
  const [isChatboxVisible, setChatboxVisibility] = useState(false);

  const toggleChatbox = () => {
    setChatboxVisibility(!isChatboxVisible);
  };
  return (
    <>
 <BrandName />
    <div className="flex justify-between">
    <div className="w-full md:w-2/3 p-8">
      <h1 className="text-2xl font-bold text-red-700 mb-4">Tata! How does this look</h1>
      <p className="text-gray-500 mb-4">Drag to reorder. Arranging your photos to show off your space.</p>

      {/* First Row */}
      <div className="flex flex-wrap -mx-2 mb-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="w-1/6 px-2 mb-4">
            <div className="overflow-hidden">
              {/* Display your photo or content here */}
              <img
                src={Image}
                alt={`Image ${item}`}
                className="w-72 h-24 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-2 text-red-700">Cover Photo</h2>
      {/* Single rectangle for Cover Photo */}
      <div className="overflow-hidden mb-4">
      <img
                src={Image}
                alt='image'
                className="w-60 h-24 object-cover"
              />
      </div>

      <h2 className="text-xl font-bold mb-2 text-red-700">Bedroom</h2>
      {/* Second Row for Bedroom */}
      <div className="flex flex-wrap -mx-2 mb-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="w-1/5 px-2 mb-4">
            <div className="overflow-hidden">
              {/* Display your photo or content here */}
              <img
                src={Image}
                alt='image'
                className="w-72 h-24 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-2 text-red-700">Bathroom</h2>
      {/* Third Row for Bathroom */}
      <div className="flex flex-wrap -mx-2 mb-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="w-1/4 px-2 mb-4">
            <div className="overflow-hidden">
              {/* Display your photo or content here */}
              <img
                src={Image}
                alt='image'
                className="w-64 h-24 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add more button */}
      <button className="text-red-700 font-bold ">
        + Add More
      </button>
    </div>

    <div className="lg:hidden  cursor-pointer" onClick={toggleChatbox}>
          <Bars3BottomRightIcon className="h-8 w-8 text-gray-600" />
        </div>

        {/* ChatBox (conditionally rendered based on visibility) */}
        {isChatboxVisible && <ChatBox toggleChatbox={toggleChatbox} />}
    
    </div>
    </>
  );
};

export default ReorderPage;
