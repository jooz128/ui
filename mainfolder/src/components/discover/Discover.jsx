import React from 'react';
import discover from '../../assets/travel.png';

const Discover = () => {
  return (
    <div className="bg-gray-300 w-1049 h-430 rounded-lg p-4 pt-4">
      <div className="flex justify-center items-center h-full">
        <p className="font-inter text-2xl font-bold leading-7 text-left">
          DISCOVER YOUR TRAVEL PERSONALITY
        </p>
      </div>
      <p className="text-center py-1 text-gray-600 text-2xl">Select an image</p>
      <div className="flex justify-around mt-4">
        <div className="p-2 rounded hover:shadow-lg transition duration-300 transform hover:scale-105">
          <img src={discover} alt="Discover" className='cursor-pointer' />
        </div>
        <p className="flex justify-center items-center m-0 mx-4">OR</p>
        <div className="p-2 rounded hover:shadow-lg transition duration-300 transform hover:scale-105">
          <img src={discover} alt="Discover" className='cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Discover;
