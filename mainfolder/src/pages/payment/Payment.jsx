import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';

const Payments = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row" style={{ marginTop: '250px' }}>
        {/* Sidebar Section */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-6">Payments</h1>

          {/* Save Credit Card Details Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Save Credit Card Details</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-semibold mb-1">First Name</p>
                <input type="text" className="border p-2 w-full" placeholder="Enter first name" />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Last Name</p>
                <input type="text" className="border p-2 w-full" placeholder="Enter last name" />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Date of Birth</p>
                <input type="date" className="border p-2 w-full" />
              </div>
            </div>
          </div>

          {/* Save UPI Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Save UPI</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold mb-1">UPI ID</p>
                <input type="text" className="border p-2 w-full" placeholder="Enter UPI ID" />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Confirm UPI</p>
                <input type="text" className="border p-2 w-full" placeholder="Confirm UPI ID" />
              </div>
           
            </div>
            <p className='mt-8'>Securely add or remove payments methods to make it easier when you book</p>  
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Payments;
