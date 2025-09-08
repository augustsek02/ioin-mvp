import React from 'react'
import Section from '../components/Section.jsx';
import banner from '../assets/banner.jpg'
import { motion } from 'framer-motion'

const Banner = () => {
  return ( 
    <>
      <Section id = "Banner"
        className='relative '  >

       <div
  className="relative min-h-[500px] sm:min-h-[600px] bg-cover bg-center flex items-center"
  style={{
    backgroundImage: `url(${banner})`,
  }}
>

  
  <div className="absolute inset-0 bg-black/40 z-10"></div>


       <motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
 className="relative z-20 w-full max-w-sm px-4 sm:px-6 mx-auto lg:mx-0 lg:ml-12 py-8"

>
<div className="bg-blue-50 rounded-lg p-6 space-y-4 shadow-xl hover:shadow-2xl transition">


  <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left break-words">
    Contact <span className="text-blue-500">Us</span>
  </h2>
  <form className="space-y-4 w-full">
  


            <div className='flex flex-col gap-1'>
              <label className='font-semibold'>First Name:</label>
              <input
                className="p-2 border rounded w-full focus:ring-2 focus:ring-blue-400 truncate"
                type="text"
                name="firstName"
                placeholder='First Name'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-semibold'>Last Name:</label>
              <input
               className='p-1'
                type="text"
                name="lastName"
                placeholder='Last Name'
              />

            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-semibold'>Email:</label>
              <input
               className='p-1'
                type="email"
                name="email"
                placeholder='Email'
              />

            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-semibold'>Message:</label>
              <textarea
               className='p-1'
                name="message"
                placeholder='Write Your Message'
              />

            </div>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
  Submit
</button>

          </form>
          </div>
        </motion.div>
        </div>
      </Section>

    </>
  )
}

export default Banner
