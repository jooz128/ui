import React, { useState } from 'react';

const PlaceSelectorPage = () => {
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const handlePlaceClick = (index) => {
    const updatedSelectedPlaces = [...selectedPlaces];
    const placeIndex = updatedSelectedPlaces.indexOf(index);

    if (placeIndex === -1) {
      updatedSelectedPlaces.push(index);
    } else {
      updatedSelectedPlaces.splice(placeIndex, 1);
    }

    setSelectedPlaces(updatedSelectedPlaces);
  };

  const renderPlaces = () => {
    const places = [];
    for (let i = 1; i <= 20; i++) { // Change the loop limit to the desired number of boxes (e.g., 10)
      const isSelected = selectedPlaces.includes(i);
      places.push(
        <div
          key={i}
          onClick={() => handlePlaceClick(i)}
          className={`flex-shrink-0 p-4 border rounded-md mr-4 mt-5 cursor-pointer ${
            isSelected ? 'bg-red-700' : ''
          }`}
        >
          <div className="w-24 h-24 bg-gray-300"></div>
          <p className={`text-center mt-2 font-bold ${isSelected ? 'text-white' : ''}`}>Place {i}</p>
        </div>
      );
    }
    return places;
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
          <span className="text-lg font-bold">Your Name</span> {/* Replace with your actual name */}
        </div>
      </div>

      <div className="flex justify-between">
        <div className="container w-2/3 p-8 mx-auto">
          <h1 className="text-4xl font-bold mb-6">Which of these best describes your place?</h1>
          <div className="flex flex-wrap">{renderPlaces()}</div>
        </div>

        <div className="w-1/3 bg-white p-8 rounded shadow-md h-screen mt-5">
          <h2 className="text-2xl font-bold mb-6 text-center">Get one-to-one guidance</h2>

          <div className="mb-4 border-b-2 border-gray-300 pb-2">
            <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">1. How to decide pricing</p>
            <p className="text-gray-700 mb-2 border border-gray-400 rounded-lg p-4">
              2. Improve reviews and get more orders
            </p>
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

export default PlaceSelectorPage;
