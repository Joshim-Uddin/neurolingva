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
            <div className='absolute bottom-4'>
                <div className='relative'>
                    <h1 className='heading z-0 font-bold text-[100px] text-white uppercase'>Neurolingva:</h1>
                </div>
                <h3 className='subheading text-[50px] text-[#0080FF] '>AI-Powered Language Learning</h3>
            </div>
        </div>
    );
};

export default Hero;