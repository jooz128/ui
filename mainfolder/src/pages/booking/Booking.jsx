import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'; // Import icons
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Navbar';
import rectangle from '../../assets/Rectangle.png';
import bookingimage from '../../assets/bookingimage.png';

const GuestForm = ({ guestCount }) => {
  const [guests, setGuests] = useState([]);

  const handleAddGuest = () => {
    setGuests([...guests, {}]);
  };

  const handleRemoveGuest = (index) => {
    const updatedGuests = guests.filter((guest, i) => i !== index);
    setGuests(updatedGuests);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-red-700 mb-4">Guest Information</h2>
      {guests.map((guest, index) => (
        <div key={index} className="mb-4">
          <div className="mt-4 w-full">
            <label className="text-xs font-semibold">First Name*</label>
            <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your first name" />
          </div>
          <div className="mt-4 w-full">
            <label className="text-xs font-semibold">Last Name*</label>
            <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your last name" />
          </div>
          <div className="mt-4 w-full">
            <label className="text-xs font-semibold">Email*</label>
            <input type="email" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your email" />
          </div>
          <div className="mt-4 w-full">
            <label className="text-xs font-semibold">Phone Number*</label>
            <input type="tel" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="e.g. +91 9876543210" />
          </div>
          <p className="text-xs font-semibold">Date of Birth*</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-semibold">Day</label>
            <select className="w-full mt-1 px-3 py-2 border rounded-md">
              <option value=""></option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold">Month</label>
            <select className="w-full mt-1 px-3 py-2 border rounded-md">
              <option value=""></option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold">Year</label>
            <select className="w-full mt-1 px-3 py-2 border rounded-md">
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-xs font-semibold">Gender*</p>
          <div className="ml-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="gender" value="male" />
              <span className="ml-2 text-xs">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" className="form-radio" name="gender" value="female" />
              <span className="ml-2 text-xs">Female</span>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <label className="text-xs font-semibold">Nationality*</label>
          <select className="w-full mt-1 px-3 py-2 border rounded-md">
            <option value=""></option>
          </select>
        </div>
          <button
            onClick={() => handleRemoveGuest(index)}
            className="text-black text-xs  font-bold py-2 px-4 rounded mt-4 flex items-center "
          >
            <FiMinus className="mr-2" /> Remove
          </button>
        </div>
      ))}
      <button
        onClick={handleAddGuest}
        className="text-black text-xs font-bold py-2 px-4 rounded mt-4 flex items-center "
      >
        <FiPlus className="mr-2" /> Add Guest
      </button>
    </div>
  );
};

  const Booking = () => {
    const [counts, setCounts] = useState({
    paraglinding: 1,
    zipLine: 1,
  });

  const handleCountChange = (activity, action) => {
    const newCounts = { ...counts };
    if (action === 'increment') {
      newCounts[activity] += 1;
    } else if (action === 'decrement' && newCounts[activity] > 0) {
      newCounts[activity] -= 1;
    }
    setCounts(newCounts);
  };

    return (
      <>
      <Header />
      <div className='flex bg-gray-50'>
       <div className='flex flex-col'>
      <div className="p-6 ml-10 max-w-3xl bg-white rounded-xl shadow-md flex flex-col space-y-4" style={{ marginTop: '300px', marginBottom: '40px' ,width:'120%' }}>
        <div className="flex items-center p-4 space-x-4">
          <svg className="h-8 w-8 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"></path>
          </svg>
          <p className="text-lg font-semibold text-red-700">How many are travelling?</p>
        </div>
        <div className="flex items-center p-4 space-x-4">
          <p className="text-lg font-semibold">Paraglinding</p>
          <div className="flex items-center space-x-4">
            <button onClick={() => handleCountChange('paraglinding', 'decrement')} className="p-2 border rounded-full">
              <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="#000" strokeWidth="2" d="M6,12 L18,12"></path>
              </svg>
            </button>
            <p className="text-lg font-semibold">{counts.paraglinding}</p>
            <button onClick={() => handleCountChange('paraglinding', 'increment')} className="p-2 border rounded-full">
              <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="#000" strokeWidth="2" d="M12,18 L12,6 M6,12 L18,12"></path>
              </svg>
            </button>
            <div className="flex items-center space-x-4">
    <label className="text-lg font-semibold">Select Time:</label>
    <select className="border rounded-md p-2">
      <option value="9:00AM">9:00AM</option>
      <option value="11:00AM">11:00AM</option>
      <option value="1:00PM">1:00PM</option>
      <option value="3:00PM">3:00PM</option>
    </select>
  </div>
          </div>
        </div>
        <div className="flex items-center p-4 space-x-4">
          <p className="text-lg font-semibold">Zip Line</p>
          <div className="flex items-center space-x-4">
            <button onClick={() => handleCountChange('zipLine', 'decrement')} className="p-2 border rounded-full">
              <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="#000" strokeWidth="2" d="M6,12 L18,12"></path>
              </svg>
            </button>
            <p className="text-lg font-semibold">{counts.zipLine}</p>
            <button onClick={() => handleCountChange('zipLine', 'increment')} className="p-2 border rounded-full">
              <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="#000" strokeWidth="2" d="M12,18 L12,6 M6,12 L18,12"></path>
              </svg>
            </button>
            <div className="flex items-center space-x-4">
    <label className="text-lg font-semibold">Select Time:</label>
    <select className="border rounded-md p-2">
      <option value="9:00AM">9:00AM</option>
      <option value="11:00AM">11:00AM</option>
      <option value="1:00PM">1:00PM</option>
      <option value="3:00PM">3:00PM</option>
    </select>
  </div>
          </div>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <p className="text-lg font-semibold">Gift this experience</p>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Send your Personal message:</p>
            <textarea className="border rounded-md p-2" rows="4"></textarea>
          </div>
     
          
        </div>
          
       
      </div>

      <div className="p-6 ml-10 max-w-2xl bg-white rounded-xl shadow-md flex flex-col space-y-4" style={{marginBottom: '25px',width:'150%' }}>
        
        <div className="bg-white rounded-xl p-4">
        
          <div className="flex items-center">
            <svg className="h-8 w-8 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"></path>
            </svg>
            <p className="ml-2 text-sm font-semibold text-red-700">Add traveller details</p>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
            </svg>
            <div className="flex flex-col">
              <p className="text-xs">Please note:</p>
              <p className="text-xs">Traveller details should match information on Government I'd proof </p>
            </div>
          </div>
</div>

        <div className="mt-4 w-full">
        <GuestForm />
        <label className="text-xs font-semibold">First Name*</label>
        <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your first name" />
      </div>
      <div className="mt-4 w-full">
        <label className="text-xs font-semibold">Last Name*</label>
        <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your last name" />
      </div>
      <div className="mt-4 w-full">
        <label className="text-xs font-semibold">Email*</label>
        <input type="email" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your email" />
      </div>
      <div className="mt-4 w-full">
        <label className="text-xs font-semibold">Phone Number*</label>
        <input type="tel" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="e.g. +91 9876543210" />
      </div>
       
        <p className="text-xs font-semibold">Date of Birth*</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-semibold">Day</label>
            <select className="w-full mt-1 px-3 py-2 border rounded-md">
              <option value=""></option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold">Month</label>
            <select className="w-full mt-1 px-3 py-2 border rounded-md">
              <option value=""></option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold">Year</label>
            <select className="w-full mt-1 px-3 py-2 border rounded-md">
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-xs font-semibold">Gender*</p>
          <div className="ml-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="gender" value="male" />
              <span className="ml-2 text-xs">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" className="form-radio" name="gender" value="female" />
              <span className="ml-2 text-xs">Female</span>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <label className="text-xs font-semibold">Nationality*</label>
          <select className="w-full mt-1 px-3 py-2 border rounded-md">
            <option value=""></option>
          </select>
        </div>
        <div className="bg-white rounded-xl p-4">
  <h2 className="text-xl font-semibold text-red-700">Travel Insurance</h2>
  <p className="text-xs">Secure your travel with just Rs 267 per traveler</p>
  <div className="flex items-center space-x-2 mt-4">
    <img src={rectangle} alt="Reactangle" style={{ width: '100px', height: '100px' }} />
    <img src={rectangle} alt="Reactangle" style={{ width: '100px', height: '100px' }} />
    <img src={rectangle} alt="Reactangle" style={{ width: '100px', height: '100px' }} />
</div>

  <div className="flex items-center justify-between mt-4">
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
  
</div>

       
      </div>

      </div>
      <div className="bg-white rounded-lg p-6 border border-gray-300 ml-52" style={{ width: '45%' ,height:'50%',marginTop:'300px' }}>
    {/* New section added on the right side */}
    <div className="bg-white rounded-xl p-4">
        <div className="flex items-center space-x-2 mt-4">
            <img src={bookingimage} alt="Rectangle" />
        </div>
        <p className="text-3xl font-semibold">Activity Name</p>
        <div className="flex items-center space-x-4">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="#000" strokeWidth="2" d="M0 0h24v24H0z" />
                <path fill="none" stroke="#000" strokeWidth="2" d="M7 10l5 5 5-5M12 0v15" />
            </svg>
            <p className="text-sm">Oct 15, 2023 1:00PM - 4:00PM</p>
        </div>

        <div className="flex items-center space-x-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            <p className="text-sm">No refunds and cancellation policy</p>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6L6 18M6 6l12 12" />
            </svg>
        </div>
    </div>
    <div className="bg-white rounded-lg p-6 border border-gray-300">
        <p className="text-2xl font-bold">Price Breakdown</p>
        <div className="mt-4 w-full">
            <div className="flex justify-between w-full">
                <p className="text-base">Base price</p>
                <p className="text-base">2 Traveler x ₹3,900</p>
            </div>
            <p className="text-base text-gray-500">₹ 7,800</p>
        </div>
        <div className="mt-4 w-full">
            <div className="flex justify-between w-full">
                <p className="text-base">Discount</p>
                <p className="text-base">- ₹ 2,340</p>
            </div>
        </div>
        <div className="mt-4 w-full border-t border-gray-300 pt-4">
            <div className="flex justify-between w-full">
                <p className="text-xl font-bold">Total due</p>
                <p className="text-xl font-bold">₹ 6,630</p>
            </div>
        </div>
    
    </div>
</div>
</div>
      <Footer />
      </>
    );
  };

  export default Booking;
