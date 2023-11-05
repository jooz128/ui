import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import App from './App';
import Activities from './pages/activities/Activities';

const Router = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}  />
        <Route path='/activities' element={<Activities />} />
    </Routes>
   </BrowserRouter>
  )
}

export default Router;