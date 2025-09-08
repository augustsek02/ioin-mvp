import React from 'react'
import Section from '../components/Section.jsx';
import Herocar from '../assets/car3.png'
import { ChevronRight, Gauge, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeLeft, FadeRight, FadeUp } from '../utility/Animation'
import { ShieldCheck } from 'lucide-react'

const Hero = () => {
    return (
        <Section id="hero" className='bg-[#ffffff] relative z-10 overflow-x-hidden min-h-screen flex items-center pt-16 lg:pt-20 section-padding'>

            <div className='max-w-7xl  mx-auto'>
                <div className='flex flex-col  lg:flex-row gap-12 lg:gap-6 lg:items-center lg:justify-center lg:pt-0 pt-12'>
                    {/* hero text */}
                    <div className='lg:w-1/2 flex  flex-col px-8 space-y-5 justify-center '>
                        <motion.h3  
                        variants={FadeRight(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='text-blue-500 text-lg lg:text-xl'>TRANSFORMING PARKING MANAGEMENT _____</motion.h3>
                        <motion.h1 
                        variants={FadeRight(0.9)}
                        initial="hidden"
                        animate="visible"
                        className='text-4xl lg:text-6xl font-bold text-black'>Autonomous
 <span className='text-blue-500'> Parking Ecosystem </span></motion.h1>
                        <motion.p
                        variants={FadeRight(1)}
                        initial="hidden"
                        animate="visible"
                        className='text-black text-sm'> IOIN Connect unifies Genetec, EasyPark & Ezicom into one intelligent layer — automating enforcement, payments, and access in real time. No more silos. No more delays. Just seamless parking.</motion.p>
                        <div className='flex gap-3'>
                            <motion.button
                            variants={FadeRight(1.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-blue-500 text-white px-3 lg:px-4 py-2 rounded-full flex items-center font-semibold'>How It Works<ChevronRight /></motion.button>
                            <motion.button
                            variants={FadeRight(1.2)}
                            initial="hidden"
                            animate="visible"
                            className='bg-white text-black lg:px-4 px-3 py-2 rounded-full ring-1 ring-black '> Book a Demo</motion.button>
                        </div>
                        <motion.div 
                        variants={FadeUp(1.8)}
                        initial="hidden"
                        animate="visible"
                        className='flex flex-col lg:flex-row gap-2 lg:gap-5 text-black pt-1 lg:pt-7'>
                            <div className="flex  items-center">
                                <Gauge className="h-8 w-8 text-blue-500 mr-2" />
                                <span className="text-xs lg:text-sm font-medium">Real-time Sync Across 5+ Systems</span>
                            </div>
                            <div className="flex items-center">
                                <ShieldCheck className="h-8 w-8 text-blue-500 mr-2" />
                                <span className="text-xs lg:text-sm font-medium">99.8% Enforcement Accuracy</span>
                            </div>
                            <div className="flex items-center">
                                <Zap className="h-8 w-8 text-blue-500 mr-2" />
                                <span className="text-xs lg:text-sm font-medium">30% Faster Entry/Exit</span>
                            </div>
                        </motion.div>
                    </div>
                    {/* hero image */}
                    <div 
                    className='lg:w-1/2 flex  justify-center'>
                        <motion.img 
                        initial={{opacity:0, x:200, scale:0.7}}
                        whileInView={{opacity:1, x:0, scale:1}}
                        transition={{duration:1.8, delay:0.8}}
                        src={Herocar} alt="" />
                    </div>
                </div>
                
            </div>
        </Section>
    )
}

export default Hero
