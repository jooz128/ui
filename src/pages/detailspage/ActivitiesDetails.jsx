import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image1 from '../../assets/details1.png';
import image2 from '../../assets/details2.png';
import image3 from '../../assets/details3.png';
import smallslided from '../../assets/topactivities.png'
import calendar from '../../assets/calendar.png'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import otheractivity from '../../assets/otheractivities.png'
import map from '../../assets/map.png'
import map2 from '../../assets/map2.png'
import { Link } from 'react-router-dom';
import rectangle from '../../assets/Rectangle.png'

    const ActivitiesDetailsPage = () => {
        const [showExperience, setShowExperience] = useState(true);
        const [selectedImages, setSelectedImages] = useState([]);
        const [agencyData, setAgencyData] = useState(null); 

     
        useEffect(() => {
            // Fetch data from the API when the component mounts
            const fetchData = async () => {
              try {
                const headers = {
                  'api_key': 'test_key',
                };
        
                const response = await axios.get('http://api.travelbeem.in/agency/getAgency?id=654920bd5bf68bf1aabc88f0', { headers });
                setAgencyData(response.data);
              } catch (error) {
                console.error('Error fetching data from API', error);
              }
            };
        
            fetchData();
          }, []);

        const handleImageClick = (image) => {
          if (selectedImages.includes(image)) {
            setSelectedImages(selectedImages.filter((selectedImage) => selectedImage !== image));
          } else {
            setSelectedImages([...selectedImages, image]);
          }
        };
        
        const handleExperienceClick = () => {
            setShowExperience(true);
        };

        const handleHostClick = () => {
            setShowExperience(false);
        };

        // Sample data for the room
        const roomData = {
        images: [image1,image2,image3],
        propertyName: 'Sample Property Name',
        location: 'Icson',
        rating: 4.5,
        reviews: 10,
        description:
            'This elegant property offers stunning views of the surrounding mountains and is located in the heart of Icson. It features modern amenities, spacious rooms, and a tranquil atmosphere. Perfect for couples and families looking for a peaceful getaway.',
        duration: '2 nights minimum',
        cancellationPolicy: '24 hrs before Learn more',
        highlights: [
            'Stunning mountain views',
            'Modern amenities',
            'Spacious rooms',
            'Tranquil atmosphere',
        ],
    };

        return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-lg" style={{ marginTop: '270px' }}>
            <div className="mt-10 ">
            <div className="carousel flex items-center justify-center">
          {/* Implement your Carousel component here with the room images */}
          <img src={roomData.images[0]} alt="Room 1" className="rounded-3xl w-2/3" />
           <div className="w-1/3 flex flex-col items-center">
              {roomData.images.slice(1).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Room ${index + 2}`}
                          className={`w-full ml-6 ${index === 0 ? 'mb-4' : 'mt-4'} rounded-3xl`}
                              />
                                      ))}
                                 </div>

                           </div>
                    <div className="mt-4 flex items-center justify-between">
                    {agencyData && (
                        <>
                        <h1 className="text-2xl font-bold text-red-700 md:text-3xl">{agencyData.name}</h1>
                        <p></p>
                        </>
                    )}
                      
                        <button className="bg-gray-300 hover:bg-gray-500 text-black font-bold text-xl py-6 px-8 rounded media-book-now">
                          Book Now
                           </button>

                    </div>
                    <div className="flex items-center mt-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6c2.76 0 5 2.24 5 5 0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5zm0 10c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"
                            />
                        </svg>
                        <p>{roomData.location}</p>
                    </div>
                    {agencyData && (
                        <div className="flex items-center mt-2">
                    <p>Rating : {agencyData.rating}</p>
                        
                    </div>
                    ) }
                    
                    <div className="mt-4">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 16a4 4 0 01-8 0M16 16a4 4 0 01-8 0"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 8a4 4 0 01-8 0 4 4 0 018 0z"
                                />
                            </svg>
                            <p>Duration : {roomData.duration}</p>
                        </div>
                        <div className="flex items-center mt-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            <p>CancellationPolicy : {roomData.cancellationPolicy}</p>
                        </div>
                    </div>
                    {agencyData && (
                        <div className="mt-4">
                        <p className="text-lg text-gray-700">{agencyData.description}</p>
                    </div>
                    )}
                    

                    <hr className="my-8" />
                    <div className="mt-4 flex items-center justify-center">
        <div className="border-2 border-grey w-1/2 rounded-full border-opacity-50 flex justify-center media-switch-thing">
            <button
                onClick={handleExperienceClick}
                className={`text-red-700 font-bold py-2 px-4 rounded-full ${
                    showExperience ? 'bg-red-700 text-white' : ''
                } transition-all duration-300`}
            >
                The Experience
            </button>
            <button
                onClick={handleHostClick}
                className={`text-red-700 font-bold py-2 px-4 rounded-full ml-4 ${
                    !showExperience ? 'bg-red-700 text-white': ''
                } transition-all duration-300`}
            >
                The Host
            </button>
        </div>
    </div>

    {showExperience ? (
    <div className="flex justify-center mt-5 media-details-images ">
      <div className="flex flex-col items-center mx-4 " onClick={() => handleImageClick("Activity 1")}>
        <img
          className={`transition-transform duration-300 ease-in-out block w-56 h-auto cursor-pointer   ${
            selectedImages.includes("Activity 1") ? "border-4 border-red-700" : ""
          }`}
          src={smallslided}
          alt="Activity 1"
        />
        <p className="text-center text-lg font-bold mt-2">Activity 1</p>
      </div>
      <div className="flex flex-col items-center mx-4" onClick={() => handleImageClick("Activity 2")}>
        <img
          className={`transition-transform duration-300 ease-in-out block w-56 h-auto cursor-pointer ${
            selectedImages.includes("Activity 2") ? "border-4 border-red-700" : ""
          }`}
          src={smallslided}
          alt="Activity 2"
        />
        <p className="text-center text-lg font-bold mt-2">Activity 2</p>
      </div>
      <div className="flex flex-col items-center mx-4" onClick={() => handleImageClick("Activity 3")}>
        <img
          className={`transition-transform duration-300 ease-in-out block w-56 h-auto cursor-pointer ${
            selectedImages.includes("Activity 3") ? "border-4 border-red-700" : ""
          }`}
          src={smallslided}
          alt="Activity 3"
        />
        <p className="text-center text-lg font-bold mt-2">Activity 3</p>
      </div>
    </div>
  ) : (
            <div className="flex flex-col items-center mt-5 p-6 border-2 border-gray-300 rounded-md shadow-lg">
    <div className="flex items-center mb-4">
        <div className="flex items-center">
        <img src={calendar} alt='calendar Image' /><br/>
        <p className="ml-2">IMP Feature: French Dinner</p>
        </div>
        <div className="flex items-center ml-4">
        <img src={calendar} alt='calendar Image' /><br/>
        <p className="ml-2">12 guest maximum</p>
        </div>
    </div>
    <div className="flex items-center mb-4">
        <div className="flex items-center">
        <img src={calendar} alt='calendar Image' />
        <p className="ml-2">Imp Feature</p>
        </div>
        <div className="flex items-center ml-4">
        <img src={calendar} alt='calendar Image' />
        <p className="ml-2">12 guest maximum</p>
        </div>
    </div>
    
        <div className="text-red-700">
        <h2 className="text-xl font-bold mb-2 text-center">Provider Name</h2>
        <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt eros quis nunc
            consequat, vel placerat purus varius.
        </p>
        </div>  
        <div className="text-red-700">
  <h2 className="text-xl font-bold mb-2">Certifications</h2>
  <div className="flex items-start"> {/* Use items-start to align items to the start (left) */}
    <img src={rectangle} className="h-16 w-16 mr-4" /> {/* Adjust height and width as needed */}
    <img src={rectangle} className="h-16 w-16" /> {/* Adjust height and width as needed */}
  </div>
</div>
  
    </div>
    )}    
    <hr className="my-8" />

    <h2 className="text-2xl font-bold mt-8">Highlights</h2>
<div className="mt-4">
    <ul className="list-inside">
        {roomData.highlights.map((highlight, index) => (
            <li key={index} className="flex items-center text-gray-700 mb-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-red-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                </svg>
                <span className="text-lg">{highlight}</span>
            </li>
        ))}
    </ul>
</div>


                    <hr className="my-8" />





                    <h2 className="text-2xl font-bold mt-8">Location</h2>
                    <div className="mt-4 ml-10 w-full media-map" >
                      <img src={map} alt='Map' />
                      <img src={map2} alt='Map' />
                    </div>

                    <div className="max-w-7xl mx-auto border-t border-gray-300 p-8">

                    <hr className="my-8" />

    <div className="flex flex-col mt-16 ">
        <h2 className="text-3xl font-bold mb-8">Reviews and Ratings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="font-bold">Cleanliness</div>
            <div className="flex items-center mt-1">
            <div className="h-2 w-40 bg-red-700 rounded"></div>
            <span className="ml-2">4.9</span>
            </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="font-bold">Value for money</div>
            <div className="flex items-center mt-1">
            <div className="h-2 w-40 bg-red-700 rounded"></div>
            <span className="ml-2">4.4</span>
            </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="font-bold">Staff</div>
            <div className="flex items-center mt-1">
            <div className="h-2 w-40 bg-red-700 rounded"></div>
            <span className="ml-2">4.0</span>
            </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="font-bold">Comfort</div>
            <div className="flex items-center mt-1">
            <div className="h-2 w-40 bg-red-700 rounded"></div>
            <span className="ml-2">4.5</span>
            </div>
        </div>

        </div>
    </div>
    <div className="mt-8">
        <div className="border-t border-gray-300 py-4 flex flex-col items-start md:flex md:flex-row">
            <div className="rounded-full h-12 w-12 overflow-hidden">
                <img src="https://a0.muscache.com/im/pictures/user/421215d1-efdc-4071-af9a-352e74a9958a.jpg?im_w=240" alt="Vibhore" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="ml-4">
                <h3 className="text-xl font-bold">Vibhore</h3>
                <div className="flex items-center mt-2">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 2L9.91 8.21L3.5 9.27l5.27 4.82l-1.5 6.19L12 16.75l5.73 3.53l-1.5-6.19l5.27-4.82l-6.41-1.06L12 2m0-2l3.53 7.29l7.97 1.32l-6.12 5.61l1.5 7.47L12 18.77V4z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 2L9.91 8.21L3.5 9.27l5.27 4.82l-1.5 6.19L12 16.75l5.73 3.53l-1.5-6.19l5.27-4.82l-6.41-1.06L12 2m0-2l3.53 7.29l7.97 1.32l-6.12 5.61l1.5 7.47L12 18.77V4z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 2L9.91 8.21L3.5 9.27l5.27 4.82l-1.5 6.19L12 16.75l5.73 3.53l-1.5-6.19l5.27-4.82l-6.41-1.06L12 2m0-2l3.53 7.29l7.97 1.32l-6.12 5.61l1.5 7.47L12 18.77V4z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 2L9.91 8.21L3.5 9.27l5.27 4.82l-1.5 6.19L12 16.75l5.73 3.53l-1.5-6.19l5.27-4.82l-6.41-1.06L12 2m0-2l3.53 7.29l7.97 1.32l-6.12 5.61l1.5 7.47L12 18.77V4z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 2L9.91 8.21L3.5 9.27l5.27 4.82l-1.5 6.19L12 16.75l5.73 3.53l-1.5-6.19l5.27-4.82l-6.41-1.06L12 2m0-2l3.53 7.29l7.97 1.32l-6.12 5.61l1.5 7.47L12 18.77V4z" />
                        </svg>
                    </div>
                    <span className="ml-2 text-gray-700">4.5</span>
                </div>
                <p className="mt-2">The place is a 10/10 and Nilesh is a great host. The location, the view, and the interior are beyond amazing. The photos don't do justice to the view, which is mesmerizing. Definitely recommend staying here if available!</p>
                
            </div>
        </div>
    </div>

    <div className="mt-8">
    <div className="border-t border-gray-300 py-4 flex flex-col items-start md:flex md:flex-row">
            <div className="rounded-full h-12 w-12 overflow-hidden">
                <img src="https://a0.muscache.com/im/pictures/user/User-97375290/original/34b5070a-091a-4cb7-9683-49083cc6e10b.jpeg?im_w=240" alt="Vibhore" className="h-full w-full object-cover" />
            </div>
            <div className="ml-4">
                <h3 className="text-xl font-bold">Bharti</h3>
                <div className="flex items-center mt-1">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 2L9.91 8.21L3.5 9.27l5.27 4.82l-1.5 6.19L12 16.75l5.73 3.53l-1.5-6.19l5.27-4.82l-6.41-1.06L12 2m0-2l3.53 7.29l7.97 1.32l-6.12 5.61l1.5 7.47L12 18.77V4z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 2L9.91 8.21L3.5 9.27l5.27 4.82l-1.5 6.19L12 16.75l5.73 3.53l-1.5-6.19l5.27-4.82l-6.41-1.06L12 2m0-2l3.53 7.29l7.97 1.32l-6.12 5.61l1.5 7.47L12 18.77V4z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 2L9.91 8.21L3.5 9.27l5.27 4.82l-1.5 6.19L12 16.75l5.73 3.53l-1.5-6.19l5.27-4.82l-6.41-1.06L12 2m0-2l3.53 7.29l7.97 1.32l-6.12 5.61l1.5 7.47L12 18.77V4z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 2L9.91 8.21L3.5 9.27l5.27 4.82l-1.5 6.19L12 16.75l5.73 3.53l-1.5-6.19l5.27-4.82l-6.41-1.06L12 2m0-2l3.53 7.29l7.97 1.32l-6.12 5.61l1.5 7.47L12 18.77V4z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 2L9.91 8.21L3.5 9.27l5.27 4.82l-1.5 6.19L12 16.75l5.73 3.53l-1.5-6.19l5.27-4.82l-6.41-1.06L12 2m0-2l3.53 7.29l7.97 1.32l-6.12 5.61l1.5 7.47L12 18.77V4z" />
                        </svg>
                    </div>
                    <span className="ml-2 text-gray-700">5.0</span>
                </div>
                <p className="mt-2">The place is a 10/10 and Nilesh is a great host. The location, the view, and the interior are beyond amazing. The photos don't do justice to the view, which is mesmerizing. Definitely recommend staying here if available!</p>
            
            </div>
        </div>
    </div>

    <div className="flex justify-center mt-8">
        <button className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
        Show all 54 reviews
        </button>
    </div>
    </div>
    <hr className="my-8" />
    <h2 className="text-3xl font-bold mb-8">Other Activities by Provider</h2>
    <div className="flex  mt-5 space-x-4 mb-8">
                                {/* Activity card 1 */}
                                <div className="flex flex-col items-center">
                                
                                    <img
                                        className="transition-transform duration-300 ease-in-out block w-72 h-auto"
                                        src={otheractivity}
                                        alt="Activity 1"
                                    />
                                    <p className="text-center text-lg font-bold mt-2">Activity 1</p>
                                    <p className="text-center text-sm text-gray-700">4.5 (24 Reviews)</p>
                                    <p className="text-red-700 font-bold mt-1">Rs 6745/guest</p>
                                </div>
                                {/* Activity card 2 */}
                                <div className="flex flex-col items-center">
                                    <img
                                        className="transition-transform duration-300 ease-in-out block w-72 h-auto"
                                        src={otheractivity}
                                        alt="Activity 2"
                                    />
                                    <p className="text-center text-lg font-bold mt-2">Activity 2</p>
                                    <p className="text-center text-sm text-gray-700">4.8 (36 Reviews)</p>
                                    <p className="text-red-700 font-bold mt-1">Rs 7899/guest</p>
                                </div>
                                {/* Activity card 3 */}
                                <div className="flex flex-col items-center">
                                    <img
                                        className="transition-transform duration-300 ease-in-out block w-72 h-auto"
                                        src={otheractivity}
                                        alt="Activity 3"
                                    />
                                    <p className="text-center text-lg font-bold mt-2">Activity 3</p>
                                    <p className="text-center text-sm text-gray-700">4.2 (18 Reviews)</p>
                                    <p className="text-red-700 font-bold mt-1">Rs 5499/guest</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-end mt-4 space-x-4 mb-6 md:text-sm">
    <button
        className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-5"
        style={{ backgroundColor: "#b91c1c", color: "white" }}
    >
        Save and Share
    </button>
   
   <Link to='/booking'> <button
        className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-5"
        style={{ backgroundColor: "#b91c1c", color: "white" }}
    >
        Continue Booking
    </button></Link>
</div>
        </div>
    </div>
    <Footer />
    </>
        );
    };

    export default ActivitiesDetailsPage;
