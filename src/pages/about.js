import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router';


const About = () => {
  const Navigate=useNavigate();
  const gotoHome=()=>{
   Navigate('/');
  }
  return (
    <>
    
<Header/>
  <section>
    <h1>About Page</h1>
    <button onClick={gotoHome}>Go to home </button>
    <button onClick={()=>Navigate(-1)}>Go back</button>
  </section>
      
      </>
  )
}

export default About
