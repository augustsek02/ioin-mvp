import React from 'react'
import Section from '../components/Section.jsx';
import Cards from './Cards'
import scan from '../assets/scan.png'
import card from '../assets/card.png'
import park from '../assets/park.png'
import gate from '../assets/gate.png'
import scan2 from '../assets/scan2.png'
 

const Benefits = () => {
      const cars =[
            {
                  id:1,
                  name:"Genetec Patroller",
                  desc:"Centralized intelligence across ANPR, mobile enforcement, and payments.",
                  img: scan
            },
            {
                  id:2,
                  name:"Ezicom",
                  desc:"Reduced revenue leakage for our operators via real-time compliance checks.",
                  
                  img: card
            },
            {
                  id:3,
                  name:"Genetec Access Control",
                  desc:"Actionable insights for occupancy, revenue, and enforcement optimization .",
                  
                  img: park
            },
            {
                  id:4,
                  name:"Ezicom terminal",
                  desc:"Multiple payment options usually for our customers",
                  
                  img: scan2
            },
            {
                  id:5,
                  name:"Genetec Patroller",
                  desc:"Shorter queues and reduced delays at entry/exit",
                  
                  img: scan
            },
            {
                  id:6,
                  name:"EasyPark",
                  desc:"Frictionless parking: drive in, park, pay, and leave.",
                  
                  img: gate
            }
      
      ]
  return (
    <Section id="Benefits" className="bg-[#ffffff] py-16 px-4 lg:px-8 min-h-screen flex items-center section-padding">

      <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col space-y-3 text-center'>
                  <h2 className='text-3xl sm:text-4x1 l:text-5x1 font-bold text-blue-500 text-center'>Benefits</h2>
                  <p className='text-sm'>Smart Parking, Smarter Outcomes: Maximize Revenue for Operators, Maximize Convenience for Customers.</p>
                  <div className='grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 pt-10'>
                        {
                              cars.map((item)=>{
                                    return <Cards key={item.id} item={item}/>
                              })
                        }
                  </div>
            </div>
            <div className='pt-10'>
                 

            </div>
      </div>
    </Section>
  )
}

export default Benefits
