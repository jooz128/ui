import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';

const Logout = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row" style={{ marginTop: '250px' }}>
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-6">Logout</h1>

          {/* Log in your account section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Log in your account</h2>

            {/* Contact Number with border */}
            <div className="border p-4 mb-3">
              <p className="text-lg font-bold">Contact Number</p>
            </div>

            {/* Enter OTP Section */}
            <p className="text-sm mb-3 text-gray-600">
              Enter the code we have sent via SMS to +91 98367447883
            </p>
            <div className="mb-4">
              <input
                type="text"
                className="border p-2 w-full"
                placeholder="Enter OTP"
              />
            </div>

            {/* Additional content can be added here */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Logout;
