import React from 'react';
import logo from "./../assets/logo.png"
import desktopbg from "./../assets/desktop-bg.png"
const Hero = () => {
    return (
        <div className='relative'>
           <div className='absolute left-[100px] top-7 flex justify-left items-center gap-2.5'>
             <img src={logo} alt="" className='max-h-10 max-w-10'/>
             <h5 className='font-bold text-sm text-white uppercase'>Neurolingva</h5>
           </div>
            <div >
                <img src={desktopbg} alt="hero background" className='max-h-[828px] w-full' />
            </div>
            <div className='herotext text-center'>            <h1 className='heading font-bold text-[100px] text-white uppercase'>Neurolingva:</h1>
            <h3 className='subheading -mt-[30px] text-[50px] text-[#0080FF] '>AI-Powered Language Learning</h3>
            <button className='text-[40px] font-extrabold uppercase text-white tracking-[5%] bg-linear-to-r from-[#008B00] to-[#DBFF30] rounded-[20px] px-[50px] py-[18px] border-[10px]' type="button">Register</button>               
            </div>
        </div>
    );
};

export default Hero;