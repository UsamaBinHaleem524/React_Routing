import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Error from './pages/error';
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/aboutus' element={<About/>} />
       <Route path='/contactus' element={<Contact/>} />
       <Route path='*' element={<Error/>} />


        {/* Nested Routing */}
       {/* <Route path='/' element={<Home/>} >
       <Route path='/aboutus' element={<About/>} />
       <Route path='/contactus' element={<Contact/>} />
       <Route path='*' element={<Error/>} />
       </Route> */}
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
