import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';

const Promo = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row" style={{ marginTop: '250px' }}>
        {/* Sidebar Section */}
       <Sidebar />

        {/* Main Content */}
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-6">Coupons</h1>

          {/* Promo Code Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Promo Code</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold mb-1">Promo Code</p>
                <input type="text" className="border p-2 w-full" placeholder="Enter promo code" />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Share Link</p>
                <input type="text" className="border p-2 w-full" placeholder="Enter share link" />
              </div>
            </div>
          </div>

          {/* Share Among Friends Section */}
          <div className="mb-6 mt-5">
            <p className="text-lg font-bold text-red-700">SHARE AMONG FRIENDS, EARN MONEY ON YOUR WALLET WITH EVERY BOOKING</p>
            <p className="text-sm text-black mb-4 font-bold mt-5">Total Earnings: Rs2300</p>
            <p className="text-sm text-black mb-4 font-bold">Number of People you shared: 459</p>
            <p className="text-sm text-black mb-4 font-bold">People Booked: 459</p>
          </div>

          {/* Learn More Section */}
          <div className='mt-5'>
            <p className="text-lg font-bold mb-4">Learn more about promo code</p>
            <p className="text-sm text-gray-600 mb-4">
              kfjhfjff bdhghjcffvd ydijgfhfdn yjdfghfd yjdgd yjdgfdujf dhgddh
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Promo;
