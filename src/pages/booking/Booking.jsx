import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Rectangle from '../../assets/Rectangle.png'
import bookingimage from '../../assets/bookingimage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar ,faTimes,faFileAlt} from '@fortawesome/free-solid-svg-icons';


const  Booking =({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDOB,setSelectedDOB]= useState(null);
  const [passengers, setPassengers] = useState([]);
const [activities, setActivities] = useState({
    zipLine: { checked: false, count: 4, slotTime: '4:00 PM' },
    paragliding: { checked: false, count: 4, slotTime: '6:00 PM' },
    cookingTour: { checked: false, count: 4, slotTime: '3:45 PM' },
  });

  const [giftExperience, setGiftExperience] = useState(false);
  const [personalMessage, setPersonalMessage] = useState('');

  const handleCheckboxChange = (activity) => {
    setActivities({
      ...activities,
      [activity]: {
        ...activities[activity],
        checked: !activities[activity].checked,
      },
    });
  };

  const handleCountIncrement = (activity) => {
    setActivities({
      ...activities,
      [activity]: {
        ...activities[activity],
        count: activities[activity].count + 1,
      },
    });
  };

  const addPassenger = () => {
    setPassengers([...passengers, { firstName: '', lastName: '', dob: null }]);
  };

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  const removePassenger = (index) => {
    const updatedPassengers = [...passengers];
    updatedPassengers.splice(index, 1);
    setPassengers(updatedPassengers);
  };


  const handleCountDecrement = (activity) => {
    if (activities[activity].count > 0) {
      setActivities({
        ...activities,
        [activity]: {
          ...activities[activity],
          count: activities[activity].count - 1,
        },
      });
    }
  };

  const handleSlotTimeChange0 = (activity, newSlotTime) => {
    setActivities({
      ...activities,
      [activity]: {
        ...activities[activity],
        slotTime: newSlotTime,
      },
    });
  };

  const handleSlotTimeChange = (activity, newSlotTime) => {
    setActivities({
      ...activities,
      [activity]: {
        ...activities[activity],
        slotTime: newSlotTime,
      },
    });
  };

  const handleGiftExperienceChange = () => {
    setGiftExperience(!giftExperience);
  };

  const handlePersonalMessageChange = (e) => {
    setPersonalMessage(e.target.value);
  };

  return (
    <div className="modal">
    <div className="modal-content">
    <span className="close" onClick={onClose}>
          &times;
        </span>
    <div className="mt-10 overflow-x-hidden ">
    <div className="flex justify-top items-top h-100 ml-16 mr-16">
  <div className="container mx-auto pl-4 border border-gray-30 rounded-lg">
  <button onClick={onClose}>Close</button>
    <div className="mb-4 ml-4">
      {/* <!-- Date Picker --> */}
      <div className="mb-4 mt-10 flex justify-center items-center">
  <DatePicker
    selected={selectedDate}
    onChange={(date) => setSelectedDate(date)}
    className="border rounded-md p-2 shadow-lg text-gray-700"
  />
</div>


      <div className="mb-4 ml-12 font-bold text-lg">
        Activity Book
        </div>
      {/* <!-- Paragliding Section --> */}
      <div className="mb-4 ml-10 font-semibold">
        <input
          type="checkbox"
          checked={activities.paragliding.checked}
          onChange={() => handleCheckboxChange('paragliding')}
          className="mr-2"
        />
        <label className="inline-block font-semibold mr-80 pr-12 ">Paragliding {" "}</label>
        <button onClick={() => handleCountDecrement('paragliding')} className="mx-1 ml-80 border-2 rounded-md border-solid border-black-800 pl-1 pr-1  ">-</button>
        <span>{activities.paragliding.count}</span>
        <button onClick={() => handleCountIncrement('paragliding')} className="mx-1 border-2 rounded-md border-solid border-black-800 pl-1 pr-1 ">+</button>
        <select
          value={activities.paragliding.slotTime}
          onChange={(e) => handleSlotTimeChange('paragliding', e.target.value)}
          className="ml-10 font-semibold border-2 rounded-md border-solid border-black-800 pl-1 pr-1"
        >
          <option value="6:00 PM">6:00 PM</option>
          {/* Add other time options here */}
        </select>
      </div>

      {/* <!-- Zip Line Section --> */}
      <div className="mb-4 ml-10 font-semibold">
        <input
          type="checkbox"
          checked={activities.zipLine.checked}
          onChange={() => handleCheckboxChange('zipLine')}
          className="mr-2"
        />
        <label className="inline-block mr-80 pr-20">Zip line </label>
        <button onClick={() => handleCountDecrement('zipLine')} className="mx-1 ml-80 border-2 rounded-md border-solid border-black-800 pl-1 pr-1">-</button>
        <span>{activities.zipLine.count}</span>
        <button onClick={() => handleCountIncrement('zipLine')} className="mx-1 border-2 rounded-md border-solid border-black-800 pl-1 pr-1">+</button>
        <select
          value={activities.zipLine.slotTime}
          onChange={(e) => handleSlotTimeChange('zipLine', e.target.value)}
          className="ml-10 border-2 rounded-md border-solid border-black-800 pl-1 pr-1"
        >
          <option value="4:00 PM">4:00 PM</option>
          {/* Add other time options here */}
        </select>
      </div>

      {/* <!-- Cooking Tour Section --> */}
      <div className="mb-4 ml-10 font-semibold">
        <input
          type="checkbox"
          checked={activities.cookingTour.checked}
          onChange={() => handleCheckboxChange('cookingTour')}
          className="mr-2"
        />
        <label className="inline-block font-semibold mr-80 pr-8">Cooking Tour </label>
        <button onClick={() => handleCountDecrement('cookingTour')} className="mx-1 ml-80 border-2 rounded-md border-solid border-black-800 pl-1 pr-1">-</button>
        <span>{activities.cookingTour.count}</span>
        <button onClick={() => handleCountIncrement('cookingTour')} className="mx-1 border-2 rounded-md border-solid border-black-800 pl-1 pr-1">+</button>
        <select
          value={activities.cookingTour.slotTime}
          onChange={(e) => handleSlotTimeChange('cookingTour', e.target.value)}
          className="ml-10 border-2 rounded-md border-solid border-black-800 pl-1 pr-1"
        >
          <option value="3:45 PM">3:45 PM</option>
          
        </select>
      </div>
{/* 
      <!-- Gift Experience Section --> */}
      <div className="mb-4 ml-20 font-semibold">
        <input
          type="checkbox"
          checked={giftExperience}
          onChange={handleGiftExperienceChange}
          className="mr-2 mt-8"
        />
        <label className="inline-block">Gift this experience</label>
      </div>

      {/* <!-- Personal Message Section --> */}
      {giftExperience && (
        <div>
          <div className="mb-2 ml-20 font-semibold">Send your personal message</div>
          <textarea
            value={personalMessage}
            onChange={handlePersonalMessageChange}
            className="w-72 h-32 ml-20 p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
      )}
    </div>
  </div>
</div>
<div className="mt-4 ml-16 mr-16  ">
<div className="flex items-center">

              <p className=" text-2xl font-semibold text-red-700">Contact Information</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex flex-col">
                <p className="text-xs">*Your hotel voucher will be sent to this email address</p>
              </div>
            </div>

          
          <div className="w-full">
          <label className="text-xs font-semibold">Email*</label>
          <input type="email" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your email" />
        </div>
        <hr className="my-4 border" />
        <div className="mt-4 w-full">
          <label className="text-xs font-semibold">Contact Number*</label>
          <input type="tel" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="e.g. +91 9876543210" />
        </div>
        <hr className="my-4 border" />
        <div className="mt-4 w-full">
          <label className="text-lg text-red-700 font-semibold mr-5">Travelers</label>
          {passengers.map((passenger, index) => (
            <div key={index} className="flex items-center mt-2">
              <div className="mr-4 w-1/2">
                <label className="text-xs font-semibold">First Name*</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                  placeholder="Enter your first name"
                  value={passenger.firstName}
                  onChange={(e) => handlePassengerChange(index, 'firstName', e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="text-xs font-semibold">Last Name*</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                  placeholder="Enter your last name"
                  value={passenger.lastName}
                  onChange={(e) => handlePassengerChange(index, 'lastName', e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <p className="text-xs font-semibold ml-16 mr-16 ">Date of Birth*</p>
                {/* <!-- Date Picker --> */}
                <div className=" mt-3 flex justify-center items-center">
                  <DatePicker
                    selected={passenger.dob}
                    onChange={(date) => handlePassengerChange(index, 'dob', date)}
                    className="border rounded-md p-2 shadow-lg text-gray-700"
                  />
                </div>
              </div>
              <button
                className="text-red-700 font-bold text-sm py-2 px-4 rounded-md ml-2"
                onClick={() => removePassenger(index)}
              >
                Remove 
              </button>
            </div>
          ))}
          <button
            className="text-red-700 font-bold text-sm py-2 px-4 rounded-md mt-2"
            onClick={addPassenger}
          >
           + Add Passenger
          </button>
          <p className="text-sm text-gray-400 font-light">Name should be the same as in Government ID proof</p>
        </div>

  </div>
        <hr className="my-4 border  ml-16 mr-16 " />
        
        <hr className="my-4 border ml-16 mr-16" />
          <div className="bg-white rounded-xl p-4 ml-16 mr-16">
    <h2 className="text-xl font-semibold text-red-700">Travel Insurance</h2>
    <p className="text-xs">Secure your travel with just Rs 267 per traveler</p>
    <div className="flex items-center space-x-2 mt-4">
      <img src={Rectangle} alt="Reactangle" className='w-40 h-40 images-booking' />
      <img src={Rectangle} alt="Reactangle" className='w-40 h-40 images-booking' />
      <img src={Rectangle} alt="Reactangle" className='w-40 h-40 images-booking' />
  </div>

    <div className="flex flex-col  justify-between mt-4">

      <div>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-blue-500 h-4 w-4" name="secureTrip" />
          <span className="ml-2">Yes, secure my trip</span>
        </label>
      </div>
      <div>
        <label className=" items-center">
          <input type="radio" className="form-radio text-blue-500 h-4 w-4" name="secureTrip" />
          <span className="ml-2">I am willing to risk my trip</span>
        </label>
      </div>
    </div>
    
    <div className="flex booking-last-media ">
      
      <div className="bg-white rounded-xl ">
      <div className="bg-white rounded-xl ">
    <div className="flex items-center space-x-4 mt-4">
        <img src={bookingimage} alt="Activity Thumbnail" className=" rounded-md" />
      
    </div>
    <p className="text-3xl font-semibold">Activity Name</p>
    <div className="text-lg flex items-center">
        <FontAwesomeIcon icon={faFileAlt} className="h-6 w-4 mr-4 text-primary" /> {/* Replace faCalendar with faFileAlt */}
        <p className="text-sm">2 X General</p>
      </div>

    <div className=" text-lg flex items-center">
        <FontAwesomeIcon icon={faCalendar} className="h-6 w-4 mr-4 text-primary" />
        <p className="text-sm">Oct 15, 2023 | 1:00 PM - 4:00 PM</p>
      </div>

      <div className="flex items-center mt-2">
                           <FontAwesomeIcon icon={faTimes} className="text-black mr-2 h-6 w-4" />
                                          <p className="text-sm">CancellationPolicy: 24 hrs before  <span className='text-gray-400'>Learn more</span></p>
                                </div>
</div>

<div className="bg-white max-w-2xl ">
<div className="mt-2">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Tickets</p>
          <p className="text-lg">Rs1899</p>
        </div>
        <p className="text-lg font-bold">Additional Service charges</p>
        <div className='flex justify-between'>
        <p>Food</p>
        <p className="">Rs699</p>
        </div>
        <div className='flex justify-between'>
        <p>Personal Trainer</p>
        <p className="">Rs699</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Discount</p>
          <p className="text-base font">Rs 7282</p>
        </div>
      </div>

      <div className="">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Taxes</p>
          <p className="text-base ">Rs 37837</p>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-300 pt-4">
        <div className="flex justify-between">
          <p className="text-xl font-bold">Total </p>
          <p className="text-xl font-bold">20005</p>
        </div>
      </div>
      
    </div>
    
      </div>
      
      <div className='flex flex-col justify-center items-center ml-12 '>
<h2 className="text-xl font-semibold text-black mb-5">Select Preferred Payment to Pay</h2>
<div className="border border-gray-300 bg-gray-300 p-4 rounded-xl w-96 h-96"> {/* Adjust the width as needed */}
  <div className="mb-4 border border-gray-400 rounded-xl p-2">
    <p className="font-semibold">UPI</p>
    <p className="text-sm">Paytm, Google Pay, PhonePe</p>
  </div>
  <div className="mb-4 border border-gray-400 rounded-xl p-2">
    <p className="font-semibold">Wallets</p>
    <p className="text-sm">Netbanking, Credit Card</p>
  </div>
  <div className="mb-4 border border-gray-400 rounded-xl p-2">
    <p className="font-semibold">Wallets</p>
    <p className="text-sm">Netbanking, Credit Card</p>
  </div>
  <div className="mb-4 border border-gray-400 rounded-xl p-2">
    <p className="font-semibold">Wallets</p>
    <p className="text-sm">Netbanking, Credit Card</p>
  </div>
</div>

<div className='pt-10'>
<button className='bg-red-700 hover:bg-red-800 text-white font-bold text-2xl py-4 px-8 rounded-md'>
  Confirm Booking
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
}

export default Booking;