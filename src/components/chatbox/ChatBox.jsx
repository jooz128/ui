import React from 'react';

const ChatBox = () => {
  return (
    <>
      <div className="w-1/3 bg-white p-8 border-l flex flex-col pt-0">
        <h2 className="text-2xl font-bold mb-6 text-center">Get one-to-one guidance</h2>
        {/* 5 Questions */}
        <div className="mb-4 border-b-2 border-gray-300 pb-2 h-full">
          <p className="text-gray-700 mb-2 border-2 border-gray-200 rounded-sm p-2">1. How to decide pricing</p>
          <p className="text-gray-700 mb-2 border-2 border-gray-200 rounded-sm p-2">2. Improve reviews and get more orders</p>
          <p className="text-gray-700 mb-2 border-2 border-gray-200 rounded-sm p-2">3. Guidance on promotions and coupons</p>
          <p className="text-gray-700 mb-2 border-2 border-gray-200 rounded-sm p-2">4. How to provide better customer experience</p>
          <p className="text-gray-700 mb-2 border-2 border-gray-200 rounded-sm p-2">5. Customer trends this year</p>
        </div>

        {/* Input box */}
        <div className="flex-grow">
          <input
            type="text"
            id="chatQuestion"
            name="chatQuestion"
            className="mt-1 p-2 block w-full border-2 border-gray-400 rounded-xl shadow-md"
            placeholder="Type your questions/query now..."
          />
        </div>
      </div>
    </>
  );
}

export default ChatBox;
