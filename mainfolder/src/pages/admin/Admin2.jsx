import React, { useState } from 'react';

const ServicePage = () => {
  const [addresses, setAddresses] = useState([{ houseNumber: '', pincode: '', location: '' }]);
  const [cancellationPolicy, setCancellationPolicy] = useState(false);
  const [reschedulePolicy, setReschedulePolicy] = useState(false);

  const [guestsCount, setGuestsCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [bedsCount, setBedsCount] = useState(1);

  const [amenities, setAmenities] = useState(['Wi-Fi', 'Parking', 'Kitchen']);
  const [newAmenity, setNewAmenity] = useState('');

  const handleAddAddress = () => {
    setAddresses([...addresses, { houseNumber: '', pincode: '', location: '' }]);
  };

  const handleIncrement = (setter) => {
    setter((prevCount) => prevCount + 1);
  };

  const handleDecrement = (setter) => {
    if (setter === 0) return;
    setter((prevCount) => prevCount - 1);
  };

  const handleAddAmenity = () => {
    if (newAmenity.trim() !== '') {
      setAmenities([...amenities, newAmenity.trim()]);
      setNewAmenity('');
    }
  };

  const handleRemoveAmenity = (index) => {
    const updatedAmenities = [...amenities];
    updatedAmenities.splice(index, 1);
    setAmenities(updatedAmenities);
  };

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
 <div className="flex justify-between">
      <div className="w-2/3 p-8">
        <h1 className="text-3xl font-bold mb-6">What type of service will guests have?</h1>

        <div className="flex flex-col mb-6">
          <div className="mb-2">
            <div className="border p-2 rounded-lg">
              <input type="checkbox" id="entirePlace" className="mr-2" />
              <label htmlFor="entirePlace">An entire place</label>
            </div>
          </div>

          <div className="mb-2">
            <div className="border p-2 rounded-lg">
              <input type="checkbox" id="room" className="mr-2" />
              <label htmlFor="room">A room</label>
            </div>
          </div>

          <div>
            <div className="border p-2 rounded-lg">
              <input type="checkbox" id="sharedPlace" className="mr-2" />
              <label htmlFor="sharedPlace">A shared place</label>
            </div>
          </div>
        </div>

        {addresses.map((address, index) => (
          <div key={index} className="mb-6">
          <h2 className='text-xl font-bold'>Your Address</h2>
            <div className="flex mb-2">
              <div className="w-1/2 mr-2">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={`houseNumber-${index}`}>
                  House Number
                </label>
                <input
                  type="text"
                  id={`houseNumber-${index}`}
                  name={`houseNumber-${index}`}
                  value={address.houseNumber}
                  onChange={(e) => {
                    const updatedAddresses = [...addresses];
                    updatedAddresses[index].houseNumber = e.target.value;
                    setAddresses(updatedAddresses);
                  }}
                  className="p-2 w-full border rounded shadow-md"
                  placeholder="House number"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={`pincode-${index}`}>
                  Pincode
                </label>
                <input
                  type="text"
                  id={`pincode-${index}`}
                  name={`pincode-${index}`}
                  value={address.pincode}
                  onChange={(e) => {
                    const updatedAddresses = [...addresses];
                    updatedAddresses[index].pincode = e.target.value;
                    setAddresses(updatedAddresses);
                  }}
                  className="p-2 w-full border rounded shadow-md"
                  placeholder="Pincode"
                />
              </div>
            </div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={`houseNumber-${index}`}>
                  Share your exact location
                </label>
            <input
              type="text"
              id={`location-${index}`}
              name={`location-${index}`}
              value={address.location}
              onChange={(e) => {
                const updatedAddresses = [...addresses];
                updatedAddresses[index].location = e.target.value;
                setAddresses(updatedAddresses);
              }}
              className="mt-1 p-2 block w-full border rounded shadow-md mb-2"
              placeholder="Share your exact location"
            />

            {index === addresses.length - 1 && (
              <p className="text-xs text-gray-500 mb-4">In case of multiple addresses or locations, add here.</p>
            )}
          </div>
        ))}

        <button onClick={handleAddAddress} className="bg-red-700 text-white p-2 hover:bg-red-600">
         + Add Another Address
        </button>
        <div className="mt-6">
          <h2 className="text-3xl font-bold mb-4">Cancellation Policy</h2>
          <div className="border p-2 rounded-lg">
            <input
              type="checkbox"
              id="cancellationPolicy"
              className="mr-2"
              checked={cancellationPolicy}
              onChange={() => setCancellationPolicy(!cancellationPolicy)}
            />
            <label htmlFor="cancellationPolicy">Share your exact location</label>
          </div>
          <div className="border p-2 rounded-lg mt-2">
            <input
              type="checkbox"
              id="cancellationPolicyOther"
              className="mr-2"
              checked={cancellationPolicy}
              onChange={() => setCancellationPolicy(!cancellationPolicy)}
            />
            <label htmlFor="cancellationPolicyOther">Other</label>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-3xl font-bold mb-4">Reschedule Policy</h2>
          <div className="border p-2 rounded-lg">
            <input
              type="checkbox"
              id="reschedulePolicy"
              className="mr-2"
              checked={reschedulePolicy}
              onChange={() => setReschedulePolicy(!reschedulePolicy)}
            />
            <label htmlFor="reschedulePolicy">Share your exact location</label>
          </div>
          <div className="border p-2 rounded-lg mt-2">
            <input
              type="checkbox"
              id="reschedulePolicyOther"
              className="mr-2"
              checked={reschedulePolicy}
              onChange={() => setReschedulePolicy(!reschedulePolicy)}
            />
            <label htmlFor="reschedulePolicyOther">Other</label>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-3xl font-bold mb-4">Share some basics about your place</h2>
          <div className="flex justify-between items-center mb-4 font-bold">
            <p>Guests</p>
            <div className="flex items-center">
              <button onClick={() => handleDecrement(setGuestsCount)} className="bg-gray-300 px-2 rounded-full">
                -
              </button>
              <span className="mx-2">{guestsCount}</span>
              <button onClick={() => handleIncrement(setGuestsCount)} className="bg-gray-300 px-2 rounded-full">
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 font-bold">
            <p>Bedroom</p>
            <div className="flex items-center">
              <button onClick={() => handleDecrement(setBedroomCount)} className="bg-gray-300 px-2 rounded-full">
                -
              </button>
              <span className="mx-2">{bedroomCount}</span>
              <button onClick={() => handleIncrement(setBedroomCount)} className="bg-gray-300 px-2 rounded-full">
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 font-bold">
            <p>Bathroom</p>
            <div className="flex items-center">
              <button onClick={() => handleDecrement(setBathroomCount)} className="bg-gray-300 px-2 rounded-full">
                -
              </button>
              <span className="mx-2">{bathroomCount}</span>
              <button onClick={() => handleIncrement(setBathroomCount)} className="bg-gray-300 px-2 rounded-full">
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 font-bold">
            <p>Beds</p>
            <div className="flex items-center">
              <button onClick={() => handleDecrement(setBedsCount)} className="bg-gray-300 px-2 rounded-full">
                -
              </button>
              <span className="mx-2">{bedsCount}</span>
              <button onClick={() => handleIncrement(setBedsCount)} className="bg-gray-300 px-2 rounded-full">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-3xl font-bold mb-4">Your standout service</h2>
          <p className="text-sm text-gray-500 mb-2">Provide a list of amenities you provide to stand out:</p>
          <ul className="list-disc pl-4 mb-4">
            {amenities.map((amenity, index) => (
              <li key={index} className="flex items-center justify-between">
                {amenity}
                <button onClick={() => handleRemoveAmenity(index)} className="text-red-700">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <input
              type="text"
              value={newAmenity}
              onChange={(e) => setNewAmenity(e.target.value)}
              className="p-2 border rounded shadow-md mr-2"
              placeholder="New Amenity"
            />
            <button onClick={handleAddAmenity} className="bg-red-700 text-white p-2 hover:bg-red-400">
              + Add Amenity
            </button>
          </div>
        </div>  
      </div>

      <div className="w-1/3 bg-white p-8 rounded shadow-md h-screen">
        <h2 className="text-2xl font-bold mb-6 text-center">Get one-to-one guidance</h2>

        <div className="mb-4 border-b-2 border-gray-300 pb-2">
          <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">1. How to decide pricing</p>
          <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">2. Improve reviews and get more orders</p>
          <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">3. Guidance on promotions and coupons</p>
          <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">
            4. How to provide better customer experience
          </p>
          <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">5. Customer trends this year</p>
        </div>

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

export default ServicePage;
