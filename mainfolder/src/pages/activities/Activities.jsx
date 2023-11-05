import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import activitiesImage from '../../assets/activities.png';

const Activities = () => {
  // Sample filter options
  const filterOptions = [
    'All Activities',
    'Adventure',
    'Cultural',
    'Water Sports',
    'Sightseeing',
    'Trekking',
    // Add more filter options as needed
  ];

  // Sample activity data
  const activities = [
    {
      id: 1,
      name: 'Adventure Hike',
      image: activitiesImage,
      stars: 4.5,
      reviews: 102,
      price: '$150', // Sample price
    },
    {
      id: 2,
      name: 'Cultural Tour',
      image: activitiesImage,
      stars: 4.2,
      reviews: 85,
      price: '$100', // Sample price
    },
    {
      id: 3,
      name: 'Scuba Diving Experience',
      image: activitiesImage,
      stars: 4.2,
      reviews: 320,
      price: '$200', // Sample price
    },
    {
      id: 4,
      name: 'Sightseeing Bus Tour',
      image: activitiesImage,
      stars: 4.2,
      reviews: 30,
      price: '$75', // Sample price
    },
  ];

  return (
    <>
      <Header />
      <div className="flex"  style={{'margin-top':'260px'}}>
        {/* Left section for filters and sorting */}
        <div className="w-1/4 bg-gray-100 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Filters</h2>
            {/* Add your filter options here */}
            {filterOptions.map((option, index) => (
              <div key={index} className="flex items-center mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  id={option}
                  name={option}
                  className="rounded-full text-red-700 form-checkbox h-4 w-4 mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <div className="border-t-2 pt-4">
            <h2 className="text-xl font-bold mb-2">Sort By</h2>
            <div className="mb-2 cursor-pointer hover:text-blue-500">Price</div>
            <div className="mb-2 cursor-pointer hover:text-blue-500">Location</div>
            <div className="mb-2 cursor-pointer hover:text-blue-500">Activity Type</div>
            <div className="mb-2 cursor-pointer hover:text-blue-500">Rating</div>
          </div>
        </div>

        {/* Right section for activity details */}
        <div className="w-3/4 p-4">
          <h2 className="text-2xl font-bold mb-4 text-red-700">Activities</h2>
          {/* Add your activity cards or details here */}
          <div className="flex flex-wrap">
            {activities.map((activity) => (
              <div key={activity.id} className="w-1/2 p-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-64 mb-4 object-cover rounded-lg"
                  />
                  <div className="font-bold text-xl mb-2">{activity.name}</div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-2" />
                    <span>{activity.stars}</span>
                  </div>
                  <div>Price: {activity.price}</div>
                  <div>Reviews: {activity.reviews}</div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Activities;
