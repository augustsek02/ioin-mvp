import React from 'react'


const Cards = ({item}) => {
    return (
        <div className='group'>

        <div className='relative w-full h-full duration-300 border rounded-lg flex flex-col gap-3 items-center justify-center py-10 px-10 bg-blue-50 group-hover:bg-blue-400 transition-all duration-75 ease-in delay-150 '>
            <img src={item.img} alt="" className='w-10' />
            <h3 className='font-semibold text-xl group-hover:text-white delay-150'>{item.name}</h3>
            <p className='text-gray-700 group-hover:text-white delay-150'>{item.desc}</p>
            <div className='flex justify-between items-center gap-6 pt-2'>
                <p className='font-semibold group-hover:text-white delay-150'>{item.price}</p>
               
            </div>

        </div>
        </div>
    )
}

export default Cards
