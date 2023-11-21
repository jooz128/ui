import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InputContext } from '../../context/InputContext';
import line from '../../assets/line.png'

const OtherNav = () => {
  const location = useLocation();
  const {
    selectedCity,
    selectedStartDate,
    selectedEndDate,
    selectedGuests,
    setSelectedCity,
    setSelectedStartDate,
    setSelectedEndDate,
    setSelectedGuests,
  } = useContext(InputContext);

  // Get the selected values from local storage if they exist.
  const storedSelectedCity = localStorage.getItem('selectedCity');
  const storedSelectedStartDate = localStorage.getItem('selectedStartDate');
  const storedSelectedEndDate = localStorage.getItem('selectedEndDate');
  const storedSelectedGuests = localStorage.getItem('selectedGuests');

  // If the selected values from local storage are not empty, use them
  // to set the state variables.
  if (storedSelectedCity) {
    setSelectedCity(storedSelectedCity);
  }
  if (storedSelectedStartDate) {
    setSelectedStartDate(storedSelectedStartDate);
  }
  if (storedSelectedEndDate) {
    setSelectedEndDate(storedSelectedEndDate);
  }
  if (storedSelectedGuests) {
    setSelectedGuests(storedSelectedGuests);
  }

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);

    // Store the selected city in local storage.
    localStorage.setItem('selectedCity', event.target.value);
  };

  const handleStartDateChange = (event) => {
    setSelectedStartDate(event.target.value);

    // Store the selected start date in local storage.
    localStorage.setItem('selectedStartDate', event.target.value);
  };

  const handleEndDateChange = (event) => {
    setSelectedEndDate(event.target.value);

    // Store the selected end date in local storage.
    localStorage.setItem('selectedEndDate', event.target.value);
  };

  const handleGuestsChange = (event) => {
    setSelectedGuests(event.target.value);

    // Store the selected number of guests in local storage.
    localStorage.setItem('selectedGuests', event.target.value);
  };
  return (
    <div className='shadow-md w-full fixed top-36 left-0 z-50 bg-white overflow-x-hidden media-responsive'>
    <div className="flex justify-center items-center bg-opacity-50 border-2 border-gray-400 px-4 py-2 relative top-5 left-0 md:left-80 shadow-lg md:static searchbar-media searchbar" >
        <select 
          name="category" 
          className="mx-1 md:mx-4 text-xs md:text-lg text-black font-semibold cursor-pointer border-none bg-transparent outline-none"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option value="" disabled selected hidden>City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
        </select>
 <img src={line} className='w-0 md:w-2 md:h-6' />
  <input
          type="date"
          placeholder="Anyweek/date"
          className="outline-none px-3 text-lg border-r-2 col-span-1 w-40 "
          value={selectedStartDate}
          onChange={handleStartDateChange}
        />
       
  <select 
          name="people" 
          className="mx-1 md:mx-4 text-xs md:text-lg text-black font-semibold w-11 cursor-pointer border-none bg-transparent outline-none"
          value={selectedGuests}
          onChange={handleGuestsChange}
        >
          <option value="" disabled selected hidden>Add Guests</option>
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <img src={line} className='w-0 md:w-2 md:h-6' />
  <div className="flex items-center mx-1 md:mx-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="8"
    height="8"
    viewBox="0 0 50 50"
    className="cursor-pointer bg-red-700 rounded-full h-8 w-8 p-2 fill-white "
    
  >
    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
  </svg>
</div>

</div>


<div className="flex justify-center items-center flex-wrap mt-7 mr-4 text-xs md:mt-5 md:mb-5">
  <button className='font-bold text-lg pr-5 text-gray-500'>
    &lt;
  </button>
  <Link to="/flights" className={`mx-2 md:mx-7 text-xs md:text-lg font-semibold ${location.pathname === '/flights' ? 'text-red-700' : 'text-black'} hover:text-gray-500`}>FLIGHTS</Link>
  <img src={line} className='w-0 md:w-2 md:h-6' />
  <Link to="/hotels" className={`mx-2 md:mx-7 text-xs md:text-lg font-semibold ${location.pathname.includes('/hotels') || location.pathname === '/hotelsdetails' ? 'text-red-700' : 'text-black'} hover:text-gray-500`}>HOTELS</Link>
 <img src={line} className='w-0 md:w-2 md:h-6' />
  <Link to="/activities" className={`mx-2 md:mx-7 text-xs md:text-lg font-semibold ${location.pathname.includes('/activities') || location.pathname.includes('/activitiesdetails/') ? 'text-red-700' : 'text-black'} hover:text-gray-500`}>ACTIVITIES</Link>
 <img src={line} className='w-0 md:w-2 md:h-6' />
  <Link to="/" className={`mx-2 md:mx-7 text-xs md:text-lg font-semibold ${location.pathname === '/flightandcar' ? 'text-red-700' : 'text-black'} hover:text-gray-500`}>FLIGHT+CAR</Link>
 <img src={line} className='w-0 md:w-2 md:h-6' />
  <Link to="/" className={`mx-2 md:mx-7 text-xs md:text-lg font-semibold ${location.pathname === '/holiday' ? 'text-red-700' : 'text-black'} hover:text-gray-500`}>HOLIDAY PACKAGES</Link>
 <img src={line} className='w-0 md:w-2 md:h-6' />
  <Link to="/" className={`mx-2 md:mx-7 text-xs md:text-lg font-semibold ${location.pathname === '/cruise' ? 'text-red-700' : 'text-black'} hover:text-gray-500`}>CRUISE</Link>
 <img src={line} className='w-0 md:w-2 md:h-6' />
  <Link to="/" className={`mx-2 md:mx-7 text-xs md:text-lg font-semibold ${location.pathname === '/grouptravel' ? 'text-red-700' : 'text-black'} hover:text-gray-500`}>GROUP TRAVEL</Link>
  <button className='font-bold text-lg pl-5 text-gray-500'> &gt;</button>
</div>


  </div>
  );
};

export default OtherNav;
