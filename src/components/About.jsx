import { ChevronRight } from 'lucide-react'
import React from 'react'
import AboutCar from '../assets/About.png'
import { motion } from 'framer-motion'

const About = () => {
  return (
    
    <div className='bg-slate-50 relative z-0 overflow-x-hidden '>
    <div className=' max-w-7xl  mx-auto '>
    <div className="w-full flex flex-col items-center mb-10 mt-12">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 text-center">
    About
  </h2>
  <p className="text-sm text-center mt-2 max-w-2xl">
  IOIN Connect is an intelligent parking solution that utilizes multiple parking technologies.
  </p>
</div>

        <div className='flex flex-col lg:flex-row gap-6 py-12 lg:py-20 items-center justify-center'>
             {/* hero image */}
             <div className='lg:w-1/2 flex justify-center w-80'>
                <motion.img
                initial={{opacity:0,x:-200, scale:0.7}}
                whileInView={{opacity:1, x:0, scale:1}}
                transition={{duration:1.5, delay: 0.2}}
                src={AboutCar} alt="" />
            </div>
            {/* hero text */}
            <div className='lg:w-1/2  flex flex-col px-8 space-y-5 justify-center '>
                <motion.h3
                initial={{opacity:0, x:200}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.8, delay:0.1}}
                className='text-blue-500 text-lg lg:text-xl'>Smart Entry, Zero Wait _____</motion.h3>
                <motion.h1 
                initial={{opacity:0, x:200}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, delay:0.2}}
                className='text-4xl lg:text-6xl font-bold'>Parking, Perfected by   <span className='text-blue-500'>Intelligence</span></motion.h1>
                <motion.p 
                initial={{opacity:0, x:200}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1.5, delay:0.5}}
                className=''>As a building owner, your parking isn’t just asphalt it’s a critical tenant amenity, a revenue stream, and a reputation driver. With IOIN Connect, you don’t just manage parking you elevate your entire property’s value effortlessly</motion.p>
                <div className='flex gap-3'>
                    <motion.button 
                    initial={{opacity:0, x:200}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:1.8, delay:0.7}}
                    className='bg-blue-500 text-white px-4 py-2 rounded-full flex items-center font-semibold'>How it works <ChevronRight /></motion.button>
                    <motion.button 
                    initial={{opacity:0, x:200}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:2, delay:1}}
                    className='bg-white border border-blue-500 text-blue-500 lg:px-4 lg:py-2 px-2 py-2 rounded-full'>Contact Us</motion.button>
                </div>
                
            </div>
           
        </div>
    </div>
    
</div>

  );
};

export default About
