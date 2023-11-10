import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import axios from 'axios';


const Hotels = () => {
  const [activities, setActivities] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('price_low_to_high');
  const [selectedActivityTypes, setSelectedActivityTypes] = useState([]);
  const [activityTypes, setActivityTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const sortActivities = () => {
    if (selectedSortOption === 'price_low_to_high') {
      activities.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === 'price_high_to_low') {
      activities.sort((a, b) => b.price - a.price);
    } else if (selectedSortOption === 'rating_low_to_high') {
      activities.sort((a, b) => a.rating - b.rating);
    } else if (selectedSortOption === 'rating_high_to_low') {
      activities.sort((a, b) => b.rating - a.rating);
    }
  };

  useEffect(() => {
    const fetchActivityTypes = async () => {
      try {
        const response = await axios.get('http://api.travelbeem.in/activity/getAllActivitiesTypes',
        {
          headers: {
            api_key: 'test_key',
          },
        });
        setActivityTypes(response.data);
      } catch (error) {
        console.error('Error fetching activity types:', error);
      }
    };

    fetchActivityTypes();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://api.travelbeem.in/activity/getActivities?price_min=10&sort_by=price&sort_by_order=inc&page_no=1&page_size=10&rating=0&agency_id=654920bd5bf68bf1aabc88f0',
          {
            headers: {
              api_key: 'test_key',
            },
          }
        );
        setActivities(response.data.activities);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchData();
  
  }, []);

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
    sortActivities();
  };

  
 
  
  const handleActivityTypeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedActivityTypes([...selectedActivityTypes, value]);
    } else {
      setSelectedActivityTypes(selectedActivityTypes.filter((type) => type !== value));
    }
  };

  const handlePriceRangeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedPriceRanges([...selectedPriceRanges, value]);
    } else {
      setSelectedPriceRanges(selectedPriceRanges.filter((range) => range !== value));
    }
  };
  
  const handleRatingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedRatings([...selectedRatings, value]);
    } else {
      setSelectedRatings(selectedRatings.filter((rating) => rating !== value));
    }
  };
  
  const filteredActivities = activities.filter((activity) => {
    if (selectedActivityTypes.length === 0 && selectedPriceRanges.length === 0 && selectedRatings.length === 0) {
      return true;
    }
    const typeCondition = selectedActivityTypes.length === 0 || selectedActivityTypes.includes(activity.type);
    const priceCondition =
      selectedPriceRanges.length === 0 ||
      (selectedPriceRanges.includes("Under 500") && activity.price < 500) ||
      (selectedPriceRanges.includes("500 - 1000") && activity.price >= 500 && activity.price <= 1000) ||
      (selectedPriceRanges.includes("1000 - 2000") && activity.price >= 1000 && activity.price <= 2000) ||
      (selectedPriceRanges.includes("2000 or more") && activity.price >= 2000);
    const ratingCondition = selectedRatings.length === 0 || selectedRatings.includes(activity.rating.toString()) || selectedRatings.includes(activity.rating.toFixed(1).toString());
    return typeCondition && priceCondition && ratingCondition;
  });


  const buttonList = [
    'Water Sports',
    'Experiences',
    'Hiking ',
    'Classes',
    'Mountain Biking',
    ' Destinations',
    'Air Sports',
  ];
  
  const amenetiesList = [
    'free cancellation',
    'Bar club',
    'Restaurant ',
    'Pet friendly',
    'Restaurant',
    'Pet friendly',
  ];

  return (
    <>
      <Header />
    
<div className="mt-4 mb-8 pl-4" style={{marginTop:'270px'}}>
  <select
    value={selectedSortOption}
    onChange={handleSortOptionChange}
    className="px-4 py-2 border rounded-md"
    style={{ paddingLeft: '10px' }}
  >
    <option value="price_low_to_high">Price : Low to High</option>
    <option value="price_high_to_low">Price : High to Low</option>
    <option value="rating_low_to_high">Rating : High to Low</option>
    <option value="rating_high_to_low">Rating : Low to High</option>
  </select>
</div>
      <div className="flex" >
      {/* Left section for filters and sorting */}
        <div className="w-1/4 bg-gray-100 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Filters</h2>
            <hr className="my-4" />
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Property Types</h3>
            
              {activityTypes.map((type, index) => (
              <div key={index} className="mb-2 cursor-pointer">
                <label>
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={type}
                    onChange={handleActivityTypeChange}
                  />
                  {type}
                </label>
              </div>
            ))}
            </div>
            <hr className="my-4" />
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Amenities</h3>
            
              {amenetiesList.map((amenity, index) => (
              <div key={index} className="mb-2 cursor-pointer">
                <label>
                  <input
                    type="checkbox"
                    className="mr-2"
               
                  />
                  {amenity}
                </label>
              </div>
            ))}
            </div>
            <hr className="my-4" />
            <div>
              <h3 className="text-lg font-bold mb-2">Your Budget</h3>
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  placeholder="Min"
                  className="border-2 border-gray-400 px-2 py-1 mr-2 rounded-sm"
                  style={{ width: '80px' }}
                />
                <span className='mx-2'>To</span>
                <input
                  type="text"
                  placeholder="Max"
                  className="border-2 border-gray-400 px-2 py-1 mr-2 rounded-sm"
                  style={{ width: '80px' }}
                />
                <button className="bg-black text-white py-2 px-4 rounded">
                  Go
                </button>
              </div>
            
            </div>
            <hr className="my-4" />
            <div>
              <h3 className="text-lg font-bold mb-2">Rating</h3>
              <div className="mb-2 cursor-pointer">
    <label>
      <input
        type="checkbox"
        className="mr-2"
        value="5"
        onChange={handleRatingChange}
      />
      5 stars
    </label>
  </div>
  <div className="mb-2 cursor-pointer">
    <label>
      <input
        type="checkbox"
        className="mr-2"
        value="4"
        onChange={handleRatingChange}
      />
      4 stars
    </label>
  </div>
  <div className="mb-2 cursor-pointer">
    <label>
      <input
        type="checkbox"
        className="mr-2"
        value="3"
        onChange={handleRatingChange}
      />
      3 stars
    </label>
  </div>
            </div>
           
          </div>
        </div>

        {/* Right section for activity details */}
        <div className="w-full md:w-3/4 p-4">
          <h2 className="text-2xl font-bold mb-4 text-red-700">Activities</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredActivities.map(activity => (
            <div key={activity.id} className="p-4">
              <div className="bg-white shadow-md rounded-lg p-4">
              {activity.photos && activity.photos.length > 0 ? (
                <Link to='/hotelsdetails'><img
                    src={activity.photos[0].url}
                    alt={activity.name}
                    className="w-full h-48 md:h-64 mb-4 object-cover rounded-lg"
                  /></Link>
                ) : (
                  <div>No Photo Available</div>
                )}
                
                <div className="font-bold text-lg md:text-xl mb-2">{activity.name}</div>
                <div className="flex items-center mb-2">
                  <div>Rating : {activity.rating}</div> {/* Make sure 'stars' data is available in the API response */}
                </div>
                <div>Price: ₹{activity.price}</div>
                <div>Description: {activity.description}</div> {/* Adding the description */}
          
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

export default Hotels;
