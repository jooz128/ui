import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="bg-white text-black w-full md:w-1/4 p-6 text-center md:text-left">
    <div className='hover:bg-gray-300'>
      <Link to="/profile" className="text-xl font-bold mb-3 block">Your Profile</Link>
      <p className="text-sm mb-3 text-gray-600">Manage your personal details and info</p>
      <div className="border-b border-gray-700 mb-3"></div>
    </div> 
    <div className='hover:bg-gray-300'>
    <Link to="/bookings" className="text-xl font-bold mb-3 block ">Bookings</Link>
    <p className="text-sm mb-3 text-gray-600">Check your latest/cancelled/pending bookings</p>
    <div className="border-b border-gray-700 mb-3"></div>
    </div>

    <div className='hover:bg-gray-300'>
    <Link to="/other-travellers" className="text-xl font-bold mb-3 block ">Other Travellers</Link>
    <p className="text-sm mb-3 text-gray-600">Add or edit the respective traveler details</p>
    <div className="border-b border-gray-700 mb-3"></div>
    </div>

    <div className='hover:bg-gray-300'>
    <Link to="/promo" className="text-xl font-bold mb-3 block ">Coupons/Promo codes</Link>
    <p className="text-sm mb-3 text-gray-600">Save on your bookings</p>
    <div className="border-b border-gray-700 mb-3"></div>
    </div>


    <div className='hover:bg-gray-300'>
    <Link to="/payments" className="text-xl font-bold mb-3 block ">Payments</Link>
    <p className="text-sm mb-3 text-gray-600">Securely add or remove payment methods</p>
    <div className="border-b border-gray-700 mb-3"></div>
    </div>

     <div className='hover:bg-gray-300'>
    <Link to="/settings" className="text-xl font-bold mb-3 block ">Settings</Link>
    <p className="text-sm mb-3 text-gray-600">Manage notifications/fare alert and more</p>
    <div className="border-b border-gray-700 mb-3"></div>
    </div>
    <Link to="/logout" className="text-xl font-bold mb-3 block ">Log out</Link>
  </div>
  )
}

export default Sidebar