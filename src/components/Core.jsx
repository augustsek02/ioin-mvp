import React from 'react'
import Section from '../components/Section.jsx';
import About from '../assets/Aboutx.png'
import { motion } from 'framer-motion'
import scan from '../assets/scan.png'
import card from '../assets/card.png'
import gate from '../assets/gate.png'
import park from '../assets/park.png'

const features = [
  {
    icon: scan,
    title: 'Genetec Patroller',
    text: 'Mobile plate scanning for on-street enforcement',
    position: 'absolute top-[140px] left-72 hidden lg:flex flex-col space-y-2  w-52 text-center',
  },
  {
    icon: card,
    title: 'Ezicom and EasyPark',
    text: 'Secure card, online & terminal payments and book, extend, pay & manage permits',
    position: 'absolute lg:top-64 top-64 right-6 lg:right-0 hidden lg:flex flex-col space-y-2  w-52 text-center',
  },
  {
    icon: gate,
    title: 'Genetec AutoVu',
    text: 'Scans plates at gates for instant entry/exit',
    position: 'absolute top-48 lg:top-64 left-6 lg:left-0 hidden lg:flex flex-col space-y-2  w-52 text-center',
  },
  {
    icon: park,
    title: 'Genetec Access Control',
    text: 'Manages secure access to parking gates, barriers, and restricted zones',
    position: 'absolute top-[140px] right-72 hidden lg:flex flex-col space-y-2 w-52 text-center',
  },
]

const Core = () => {
    return (
        <Section id ="core" className='relative bg-[#ffffff] min-h-screen flex items-center section-padding'>
            <div className="max-w-7xl  mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='flex flex-col items-center'>
                        <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 leading-tight text-center">
  Parking Core
</h2>
<p className="text-sm text-center mt-4 max-w-3xl">
Genetec AutoVu, Patroller, Access Control, Ezicom, and EasyPark work together to automate vehicle recognition, access, enforcement, and payments for a seamless parking experience.
</p>

                    <img src={About} alt="" className='w-full max-w-4xl h-auto mx-auto mt-32 lg:mt-56' />

                  
          {features.map((f, idx) => (
            <div key={idx} className={f.position}>
              <img src={f.icon} alt="" className="w-16 mx-auto" />
              <h3 className="font-semibold">{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}

          {/* Mobile (stacked under image) */}
          <div className="grid grid-cols-1 gap-6 mt-10 lg:hidden">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4"
              >
                <img src={f.icon} alt="" className="w-16 mb-3" />
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.text}</p>
              </div>
            ))} 
           </div>
           
                    
                </motion.div>

            </div>
        </Section>
    )
}

export default Core
