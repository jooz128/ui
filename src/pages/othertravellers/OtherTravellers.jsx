import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';

const OtherTravellers = () => {
    const [travelers, setTravelers] = useState([]);
    const [newTraveler, setNewTraveler] = useState({});
    const [showAddForm, setShowAddForm] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
  
    const handleAddTravellerClick = () => {
      setShowAddForm(true);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setShowSidebar(window.innerWidth > 768); // Adjust the width as needed
      };
  
      // Initial check
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row" style={{ marginTop: '275px' }}>
        {/* Sidebar */}
        {showSidebar && <Sidebar />}
        {/* Main Content */}
        <div className="flex-grow p-6">
          {/* Display Travellers */}
          <div className="mb-6">
            <div className="flex items-center mb-4 border-b border-gray-300 pb-4">
              {/* Placeholder for Traveller's photo */}
              <div className="h-12 w-12 bg-gray-500 rounded-full mr-4"></div>
              <div>
                <p className="text-lg font-bold">Traveller Name</p>
                <p className="text-sm text-gray-600">Female</p>
              </div>
              <Link to="#" className="ml-auto text-red-700">
           <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                Edit
              </Link>
            </div>
          </div>

          {/* Add Traveller Form */}
          {showAddForm && (
            <div className="border rounded-md p-6 mb-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">Mandatory Details</h2>

              {/* Mandatory Field Section */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold mb-1">Title*</p>
                  <input type="text" className="border p-2 w-full" placeholder="Mr/Mrs" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">First Name*</p>
                  <input type="text" className="border p-2 w-full" placeholder="Enter first name" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Last Name*</p>
                  <input type="text" className="border p-2 w-full" placeholder="Enter last name" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Date of Birth*</p>
                  <input type="date" className="border p-2 w-full" />
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4">Optional Details</h2>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-1">Email ID*</p>
                  <input type="email" className="border p-2 w-full" placeholder="Enter email" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Issuing Country*</p>
                  <input type="text" className="border p-2 w-full" placeholder="Enter issuing country" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Contact Number*</p>
                  <input type="tel" className="border p-2 w-full" placeholder="Enter contact number" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Passport Number*</p>
                  <input type="text" className="border p-2 w-full" placeholder="Enter passport number" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Expiry Date*</p>
                  <input type="date" className="border p-2 w-full" />
                </div>
              </div>

              {/* Add Traveller Button */}
              <button
                className="bg-red-700 text-white py-2 px-4 mt-6 rounded-full hover:bg-red-600"
                onClick={() => setShowAddForm(false)}
              >
                Add Traveller
              </button>
            </div>
          )}

          {/* Button to Add Traveller */}
          {!showAddForm && (
            <button
              className="bg-red-700 text-white py-2 px-4 rounded-full hover:bg-red-600"
              onClick={handleAddTravellerClick}
            >
              Add Traveller
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OtherTravellers;
