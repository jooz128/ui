import React, { useState } from 'react';


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    brandName: '',
    companyName: '',
    companyPhone: '',
    companyEmail: '',
    agreementChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
          <div className="flex items-center justify-between w-full mb-12 p-6 bg-white rounded shadow-md">
        <h2 className="text-xl font-bold">Finish SignUp</h2>
        
        <img
          src="https://via.placeholder.com/50"
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-6/12">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-3 border rounded shadow-md"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-3 border rounded shadow-md"
            />
          </div>

          <p className="text-xs text-gray-500 mb-2">Make sure it matches the name on your govt ID</p>

          <div className="mb-4">
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              placeholder="Brand Name"
              className="w-full p-3 border rounded shadow-md"
            />
          </div>

          <p className="text-xs text-gray-500 mb-2">Make sure it matches the name on your govt ID</p>

          {/* Company Details */}
          <div className="mb-4 space-y-2">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full p-3 border rounded shadow-md"
            />

            <input
              type="tel"
              name="companyPhone"
              value={formData.companyPhone}
              onChange={handleChange}
              placeholder="Company Phone"
              className="w-full p-3 border rounded shadow-md"
            />

            <input
              type="email"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              placeholder="Company Email"
              className="w-full p-3 border rounded shadow-md"
            />
          </div>

   

          <p className="text-sm text-gray-600 mt-4 text-center">
            We will send you hjff ghfghfjhjfhfjf By selecting Agree and Continue, I agree to travelbeem Terms and conditions of service, payment terms of service, non-discrimination policy, and acknowledge the privacy policy.
          </p>

          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreementChecked"
                checked={formData.agreementChecked}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-600 text-center">
                I don’t want to receive any gdjg vdvhdv gdjdghf ghddghd vhsdvdghdf vhdsgdfh gvjsgd gjdhfj gdjgfhfh gjdshg ghjdhgujf
              </span>
            </label>
          </div>
          
          <div className='flex items-center justify-center'>
          <button
            type="submit"
            className={`bg-red-700 text-white p-3 rounded mt-4 ${
              !formData.agreementChecked ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!formData.agreementChecked}
          >
            Agree and Continue
          </button>
          </div>

        </form>
      </div>
    </div>
    </>
  );
};

export default Signup;
