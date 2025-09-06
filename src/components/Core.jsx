import React from 'react'
import About from '../assets/Aboutx.png'
import { motion } from 'framer-motion'
import scan from '../assets/scan.png'
import card from '../assets/card.png'
import gate from '../assets/gate.png'
import park from '../assets/park.png'

const Aboutx = () => {
    return (
        <div className='relative bg-blue-50'>
            <div className='max-w-7xl lg:h-[800px] h-[300px] mx-auto  pt-50'>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='flex flex-col '>
                        <h2 className='text-3xl lg:text-4xl font-bold text-gray-800 leading-tight text-center mt-[60px]'>
            The Parking Core
          </h2>
                    <img src={About} alt="" className='w-full max-w-4xl h-auto mx-auto mt-[160px] lg:mt-[208px]' />
                    <div className='p-2 lg:flex flex-col space-y-2 lg:w-52 w-20 mx-auto text-center justify-center absolute top-[90px] left-72 '>
                        <div className='mx-auto'>
                            <img src={scan} alt="" className='w-20 p-4' />

                        </div>
                        <h3 className='font-semibold text-sm lg:text-lg hidden lg:block'>Genetec Patroller</h3>
                        <p className='hidden lg:block'>Mobile plate scanning for on-street enforcement</p>
                       
                    </div>
                    <div className='p-2 lg:flex flex-col space-y-2 w-20 lg:w-52 mx-auto text-center justify-center absolute lg:top-48 top-36 right-6 lg:right-0'>
                        <div className='mx-auto'>
                            <img src={card} alt="" className='w-20 p-2 ' />

                        </div>
                        <h3 className='font-semibold hidden lg:block'>Ezicom and EasyPark</h3>
                        <p className='hidden lg:block'>Secure card, online & terminal payments and book, extend, pay & manage permits</p>
                       
                    </div>
                    <div className='p-2 lg:flex flex-col space-y-2 w-20 lg:w-52 mx-auto text-center justify-center absolute top-36 lg:top-52 left-6 lg:left-0'>
                        <div className='mx-auto'>
                            <img src={gate} alt="" className='lg:w-20  p-2' />

                        </div>
                        <h3 className='font-semibold hidden lg:block'>Genetec AutoVu</h3>
                        <p className='hidden lg:block'>Scans plates at gates for instant entry/exit</p>
                        
                    </div>
                    <div className='p-2 lg:flex flex-col space-y-2 w-20 lg:w-52 mx-auto text-center justify-center absolute top-[90px] right-72'>
                        <div className='mx-auto'>
                            <img src={park} alt="" className='w-20 p-2 ' />

                        </div>
                        <h3 className='font-semibold hidden lg:block'>Genetec Access Control </h3>
                        <p className='hidden lg:block'>Manages secure access to parking gates, barriers, and restricted zones</p>
                        
                    </div>
                    
                </motion.div>

            </div>
        </div>
    )
}

export default Aboutx
