import React, { useState } from 'react';
import ChatBox from '../../components/chatbox/ChatBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import BrandName from '../../components/BrandName/BrandName';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const SetPrice = () => {
  const [isChatboxVisible, setChatboxVisibility] = useState(false);

  const toggleChatbox = () => {
    setChatboxVisibility(!isChatboxVisible);
  };
  return (
    <>
     <BrandName />
    <div className="flex justify-between">
      <div className="w-full md:w-2/3 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-red-700">Now, set your price!</h1>

      {/* Service Section */}
      <div className='p-10'>
      <div className="mb-8">
        <h2 className="text-red-700 font-bold text-3xl">Service</h2>
        <p className="text-lg text-black font-semibold">Brand heading fgh gujhgh ghjhgh ghjh hgh</p>
        <p className="text-black text-lg font-semi">Rs 5677</p>
        <p className="text-sm text-gray-500 font-semibold">Guest price before tax Rs 6788</p>
      </div>

      <div className="mb-8">
        <h2 className="text-red-700 font-bold text-3xl">Service</h2>
        <p className="text-lg text-black font-semibold">Brand heading fgh gujhgh ghjhgh ghjh hgh</p>
        <p className="text-black text-lg font-semi">Rs 5677</p>
        <p className="text-sm text-gray-500 font-semibold">Guest price before tax Rs 6788</p>
      </div>

      <div className="mb-8">
        <h2 className="text-red-700 font-bold text-3xl">Service</h2>
        <p className="text-lg text-black font-semibold">Brand heading fgh gujhgh ghjhgh ghjh hgh</p>
        <p className="text-black text-lg font-semi">Rs 5677</p>
        <p className="text-sm text-gray-500 font-semibold">Guest price before tax Rs 6788</p>
      </div>
      </div>
      <div className=''>
      <p className="text-lg border-2 border-gray-400 rounded-lg text-center text-black flex items-center justify-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Compare competitor similar listings Rs 787 - Rs 78595
          </p>
          </div>
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

export default SetPrice;
