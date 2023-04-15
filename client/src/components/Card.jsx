import React from 'react'

export const Card = ({candidate}) => {
    return (
        <div className='w-64 h-64 rounded-md shadow-[0_0_25px_#b6b7ea] flex flex-col items-center p-4 bg-slate-100'>
            <img className='w-28 h-28' src={candidate.img_url} alt="" />
            <span className='mt-4 text-[#0BA046] text-2xl'>{candidate.party_name}</span>
            <button className='px-12 py-2 text-white text-lg rounded-lg mt-3 hover:bg-[#574fe7] bg-[#6C63FF]'>Vote</button>
        </div>
    )
}
