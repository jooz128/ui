import React from 'react'
import { BrowserRouter, Route,Routes, } from 'react-router-dom';
import App from './App';
import Activities from './pages/activities/Activities';
import Booking from './pages/booking/Booking';
import Hotels from './pages/hotels/Hotels';
import ActivitiesDetailsPage from './pages/detailspage/ActivitiesDetails';
import HotelsDetailsPage from './pages/detailspage/HotelsDetails';
import { InputProvider } from './context/InputContext';
import Profile from './pages/profile/Profile';
import OtherTravellers from './pages/othertravellers/OtherTravellers';
import Promo from './pages/promo/Promo';
import Payments from './pages/payment/Payment';
import Settings from './pages/settings/Settings';
import Logout from './pages/logout/Logout';
import Bookings from './pages/bookings/Bookings';
import Flights from './pages/flights/Flights';
import Signup from './pages/signup/SignUp';
import GetStarted from './pages/admin/Admin1';
import ServicePage from './pages/admin/Admin2';
import PlaceSelectorPage from './pages/admin/Admin3';


const Router = () => {
  return (
   <BrowserRouter>
   <InputProvider>
    <Routes>
        <Route path='/' element={<App />}  />
        <Route path='/activities' element={<Activities />} />
        <Route path="/activitiesdetails/:id" element={<ActivitiesDetailsPage />} />
        <Route path='/hotelsdetails' element={<HotelsDetailsPage />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/other-travellers' element={<OtherTravellers />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/flights' element={<Flights />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/getstarted' element={<GetStarted />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/admin' element={<PlaceSelectorPage />} />
    </Routes>
    </InputProvider>
   </BrowserRouter>
  )
}

export default Router;