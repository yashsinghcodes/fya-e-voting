import React from 'react'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div className='fixed bottom-2 z-20 h-14 w-full flex items-center justify-end'>
            <div className='w-1/6 mr-10 flex justify-evenly'>
                <Link to='/about' className={`text-[#504e68] hover:text-slate-600 hover:font-semibold text-md p-2 rounded-md`}>About Us</Link>
                <Link to='/contact' className={`text-[#504e68] hover:text-slate-600 hover:font-semibold text-md p-2 rounded-md`}>Contact</Link>
                <Link to='/help' className={`text-[#504e68] hover:text-slate-600 hover:font-semibold text-md p-2 rounded-md`}>Help</Link>
            </div>
        </div>
    )
}
