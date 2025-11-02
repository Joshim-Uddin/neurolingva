import React from 'react';
import Hero from '../Components/Hero';
import Welcome from '../Components/Welcome';

const Main = () => {
    return (
        <div className='bg-linear-to-r from-[#1E91FF] to-[#EDF9FF]'>
          <Hero /> 
          <Welcome />
        </div>
    );
};

export default Main;