import React from 'react'
import { BrowserRouter, Route,Routes, } from 'react-router-dom';
import App from './App';
import Activities from './pages/activities/Activities';
import Booking from './pages/booking/Booking';
import Hotels from './pages/hotels/Hotels';
import ActivitiesDetailsPage from './pages/detailspage/ActivitiesDetails';
import HotelsDetailsPage from './pages/detailspage/HotelsDetails';
import { InputProvider } from './context/InputContext';

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
    </Routes>
    </InputProvider>
   </BrowserRouter>
  )
}

export default Router;