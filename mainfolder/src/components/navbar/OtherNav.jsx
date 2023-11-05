import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OtherNav = () => {
  return (
    <div className='shadow-md w-full fixed top-24 left-0 h-40 z-50 bg-white'>
      <div className="flex justify-center items-center bg-opacity-50 border-2 px-4 py-2 relative top-5 left-80 shadow-lg " style={{ width: '708px', height: '63px', borderRadius: '70px' }}>
      <Link to="/" className="mx-4 text-lg text-black font-semibold hover:text-blue-500">Destinations</Link>
        <span className="text-gray-500">|</span>
        <Link to="/" className="mx-4 text-lg text-black font-semibold hover:text-blue-500">AnyWeek/Date</Link>
        <span className="text-gray-500">|</span>
        <Link to="/" className="mx-4 text-lg text-black font-semibold hover:text-blue-500">Add Guests</Link>
        <span className="text-gray-500">|</span>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/" className="mx-4 text-lg text-gray-700 hover:text-blue-500">FLIGHTS</Link>
        <span className="text-gray-500">|</span>
        <Link to="/" className="mx-4 text-lg text-gray-700 hover:text-blue-500">HOTELS</Link>
        <span className="text-gray-500">|</span>
        <Link to="/activities" className="mx-4 text-lg text-gray-700 hover:text-blue-500">ACTIVITIES</Link>
        <span className="text-gray-500">|</span>
        <Link to="/" className="mx-4 text-lg text-gray-700 hover:text-blue-500">FLIGHT+CAR</Link>
        <span className="text-gray-500">|</span>
        <Link to="/" className="mx-4 text-lg text-gray-700 hover:text-blue-500">HOLIDAY PACKAGES</Link>
        <span className="text-gray-500">|</span>
        <Link to="/" className="mx-4 text-lg text-gray-700 hover:text-blue-500">CRUISE</Link>
        <span className="text-gray-500">|</span>
        <Link to="/" className="mx-4 text-lg text-gray-700 hover:text-blue-500">GROUP TRAVEL</Link>
      </div>
    </div>
  );
};

export default OtherNav;
