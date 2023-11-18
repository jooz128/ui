  import React, { useState, useEffect ,useContext} from 'react';
  import { FiPlus, FiMinus } from 'react-icons/fi'; // Import icons
  import Footer from '../../components/footer/Footer';
  import Header from '../../components/navbar/Navbar';
  import rectangle from '../../assets/Rectangle.png';
  import bookingimage from '../../assets/bookingimage.png';
  import { InputContext } from '../../context/InputContext';


  const GuestForm = ({ guestCount }) => {
    const [guests, setGuests] = useState([]);
  

    const handleAddGuest = () => {
      setGuests([...guests, {}]);
    };

    const handleRemoveGuest = (index) => {
      const updatedGuests = guests.filter((guest, i) => i !== index);
      setGuests(updatedGuests);
    };

    return (
      <div className="p-4">
        
        {guests.map((guest, index) => (
          <div key={index} className="mb-4">
          
          <div className="flex mt-2 w-full">
    <div className=" w-1/2">
      <label className="text-xs font-semibold">First Name*</label>
      <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your first name" />
    </div>
    <div className="w-1/2">
      <label className="text-xs font-semibold">Last Name*</label>
      <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your last name" />
    </div>
          </div>
          <hr className="my-4 border" />
            <p className="text-xs font-semibold">Date of Birth*</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold">Day</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md">
                <option value=""></option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold">Month</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md">
                <option value=""></option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold">Year</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md">
                <option value=""></option>
              </select>
            </div>
          </div>
        <hr className="my-4 border" />
            <button
              onClick={() => handleRemoveGuest(index)}
              className="text-black text-xs  font-bold py-2 px-4 rounded mt-4 flex items-center "
            >
              <FiMinus className="mr-2" /> Remove
            </button>
          </div>
        ))}
        <button
          onClick={handleAddGuest}
          className="text-black text-xs font-bold py-2 px-4 rounded mt-4 flex items-center "
        >
          <FiPlus className="mr-2" /> Add Guest
        </button>
      </div>
    );
  };

    const Booking = () => {
      const [data, setData] = useState(null);
      const [selectedTimes, setSelectedTimes] = useState({}); 
      const [counts, setCounts] = useState({});
      const { selectedGuests } = useContext(InputContext);  

    const handleTimeChange = (activityId, selectedTime) => {
      setSelectedTimes((prevTimes) => ({
        ...prevTimes,
        [activityId]: selectedTime,
      }));
    };
    const handleCountChange = (activityId, action) => {
      setCounts((prevCounts) => {
        const currentCount = prevCounts[activityId] || 0;

        // Update the count based on the action (increment or decrement)
        const newCount = action === 'increment' ? currentCount + 1 : Math.max(currentCount - 1, 0);

        // Return the updated counts
        return {
          ...prevCounts,
          [activityId]: newCount,
        };
      });
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://api.travelbeem.in/itinerary/getItinerary?date=2023-11-12T00:00:00Z&user_count=9&activity_ids=6547e0060f25e5bdfa53b6b6&activity_ids=6547dec90f25e5bdfa53b6b4&activity_ids=6547dffc0f25e5bdfa53b6b5', 
          {
            headers: {
              api_key: 'test_key',
            },
          });
        
          const result = await response.json();
          setData(result);
          console.log(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []); // Empty dependency array means this effect runs once after the initial render

    if (!data) {
      return <p>Loading...</p>;
    }

     const totalPrice = data.amount.total;
  const gst = data.amount.gst;

      return (
        <>
        <Header />
          
        <div className='flex flex-col '>
        <div className='flex justify-around booking-media-col' style={{ marginTop: '300px', marginBottom: '40px' }}>
        <div className="p-6 ml-10 max-w-md bg-white rounded-xl shadow-md flex flex-col space-y-4 media-booking" >
      <div className="flex items-center p-4 space-x-4">
        <svg className="h-8 w-8 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"></path>
        </svg>
        <p className="text-lg font-semibold text-red-700">How many are travelling?</p>
      </div>

      {/* Dynamic rendering based on API response */}
      {data.itinerary_schedules.map((activity) => (
        <div key={activity.activity_id} className="flex flex-col p-4 space-y-4">
          <p className="text-lg font-semibold">{activity.activity_type}</p>
          <div className="flex flex-col">
            {/* Display the start time as formatted text */}
            <label className="text-lg font-semibold">Select Time:</label>
            
            {/* Dropdown for selecting time within the schedule */}
            <select
              className="border rounded-md p-2"
              onChange={(e) => handleTimeChange(activity.activity_id, e.target.value)}
              value={selectedTimes[activity.activity_id] || ''}
            >
              {activity.activity_schedules.map((schedule) => (
                <option key={schedule.id} value={schedule.start_time}>
                  {new Date(schedule.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </option>
              ))}
            </select>
            <div className='flex gap-2 items-center ml-5 mt-5 ' >
            <button
                onClick={() => handleCountChange(activity.activity_id, 'decrement')}
                className="bg-black text-white rounded-full px-3 py-1 " style={{width:'40%'}}
              >
                -
              </button>
              <span>{counts[activity.activity_id] || 0}</span>
              <button
                onClick={() => handleCountChange(activity.activity_id, 'increment')}
                className="bg-black text-white rounded-full px-3 py-1" style={{width:'40%'}}
              >
                +
              </button>
              </div>
          </div>

          <div className="flex flex-col mt-2">
            {/* Display price and available seats */}
            <p className="text-base">Price: {activity.activity_schedules[0].price}</p>
            <p className="text-base">Available Seats: {activity.activity_schedules[0].available_seats}</p>

            {/* Buttons for incrementing and decrementing counts */}
       
            
          </div>
        </div>
      ))}

      <div className="flex flex-col p-4 space-y-4">
        <div className="flex items-center space-x-4">
          <p className="text-lg font-semibold">Gift this experience</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-semibold">Send your Personal message:</p>
          <textarea className="border rounded-md p-2" rows="4"></textarea>
        </div>
      </div>
    </div>
        <div className="p-6 ml-10 max-w-5xl bg-white rounded-xl shadow-md flex flex-col space-y-4 media-second-booking" style={{marginBottom: '25px', }}>
          
          <div className="bg-white rounded-xl p-4">
          
            <div className="flex items-center">
              <svg className="h-8 w-8 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"></path>
              </svg>
              <p className="ml-2 text-sm font-semibold text-red-700">Add traveller details</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
              </svg>
              <div className="flex flex-col">
                <p className="text-xs">Please note:</p>
                <p className="text-xs">Traveller details should match information on Government I'd proof </p>
              </div>
            </div>
  </div>

          <div className="mt-4 w-full">
          
          <div className="mt-4 w-full">
          <label className="text-xs font-semibold">Email*</label>
          <input type="email" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your email" />
        </div>
        <hr className="my-4 border" />
        <div className="mt-4 w-full">
          <label className="text-xs font-semibold">Phone Number*</label>
          <input type="tel" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="e.g. +91 9876543210" />
        </div>
        <hr className="my-4 border" />
        <div className="mt-4 w-full">
        
          <label className="text-xs font-semibold">Travelers</label>
          <p>{selectedGuests}</p>
        </div>
        </div>
        <GuestForm />
        <hr className="my-4 border" />
      <div className="flex mt-4 w-full">
    <div className="mr-4 w-1/2">
      <label className="text-xs font-semibold">First Name*</label>
      <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your first name" />
    </div>
    <div className="w-1/2">
      <label className="text-xs font-semibold">Last Name*</label>
      <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your last name" />
    </div>
  </div>
        <hr className="my-4 border" />
        <p className="text-xs font-semibold">Date of Birth*</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold">Day</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md">
                <option value=""></option>
              </select>
            </div>
            
            <div>
              <label className="text-xs font-semibold">Month</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md">
                <option value=""></option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold">Year</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md">
                <option value=""></option>
              </select>
            </div>
          </div>
        <hr className="my-4 border" />
          <div className="bg-white rounded-xl p-4">
    <h2 className="text-xl font-semibold text-red-700">Travel Insurance</h2>
    <p className="text-xs">Secure your travel with just Rs 267 per traveler</p>
    <div className="flex items-center space-x-2 mt-4">
      <img src={rectangle} alt="Reactangle" className='w-24 h-24 images-booking' />
      <img src={rectangle} alt="Reactangle" className='w-24 h-24 images-booking' />
      <img src={rectangle} alt="Reactangle" className='w-24 h-24 images-booking' />
  </div>

    <div className="flex items-center justify-between mt-4">
      <div>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-blue-500 h-4 w-4" name="secureTrip" />
          <span className="ml-2">Yes, secure my trip</span>
        </label>
      </div>
      <div>
        <label className=" items-center">
          <input type="radio" className="form-radio text-blue-500 h-4 w-4" name="secureTrip" />
          <span className="ml-2">I am willing to risk my trip</span>
        </label>
      </div>
    </div>
    
  </div>
</div>
</div>
        
        <div className="flex  booking-last-media ml-12">
      
        <div className="bg-white rounded-xl p-4">
        <div className="bg-white rounded-xl p-4">
      <div className="flex items-center space-x-4 mt-4">
          <img src={bookingimage} alt="Activity Thumbnail" className=" rounded-md" />
        
      </div>
      <p className="text-3xl font-semibold">Activity Name</p>
      <div className="flex items-center space-x-4 mt-2">
          <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="#000" strokeWidth="2" d="M0 0h24v24H0z" />
              <path fill="none" stroke="#000" strokeWidth="2" d="M7 10l5 5 5-5M12 0v15" />
          </svg>
          <p className="text-sm">Oct 15, 2023 | 1:00 PM - 4:00 PM</p>
      </div>

      <div className="flex items-center space-x-4 mt-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-danger mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <p className="text-sm">No refunds and cancellation policy</p>
          <svg className="h-6 w-6 text-success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6L6 18M6 6l12 12" />
          </svg>
      </div>
  </div>

  <div className="bg-white max-w-2xl rounded-lg p-6 border border-gray-300 mt-4">
        <p className="text-2xl font-bold">Price Breakdown</p>

        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-base">Base price</p>
            <p className="text-base">{`₹ ${totalPrice - gst}`}</p>
          </div>
          <p className="text-base text-gray-500">{`₹ ${totalPrice - gst}`}</p>
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-base">GST ({gst}%)</p>
            <p className="text-base">{`₹ ${gst}`}</p>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-300 pt-4">
          <div className="flex justify-between">
            <p className="text-xl font-bold">Total due</p>
            <p className="text-xl font-bold">{`₹ ${totalPrice}`}</p>
          </div>
        </div>
        
      </div>
      
        </div>
        
        <div className='flex flex-col justify-center items-center ml-12 '>
  <h2 className="text-xl font-semibold text-black mb-5">Select Preferred Payment to Pay</h2>
  <div className="border border-gray-300 bg-gray-300 p-4 rounded-xl w-96 h-96"> {/* Adjust the width as needed */}
    <div className="mb-4 border border-gray-400 rounded-xl p-2">
      <p className="font-semibold">UPI</p>
      <p className="text-sm">Paytm, Google Pay, PhonePe</p>
    </div>
    <div className="mb-4 border border-gray-400 rounded-xl p-2">
      <p className="font-semibold">Wallets</p>
      <p className="text-sm">Netbanking, Credit Card</p>
    </div>
    <div className="mb-4 border border-gray-400 rounded-xl p-2">
      <p className="font-semibold">Wallets</p>
      <p className="text-sm">Netbanking, Credit Card</p>
    </div>
    <div className="mb-4 border border-gray-400 rounded-xl p-2">
      <p className="font-semibold">Wallets</p>
      <p className="text-sm">Netbanking, Credit Card</p>
    </div>
  </div>
</div>

        </div>
  </div>


        <Footer />
        </>
      );
    };

    export default Booking;
