import React from 'react'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const exploreUrlChecker = window.location.href.indexOf("explore") !== -1;
    return (
        <div className='fixed bottom-2 z-20 h-14 w-full flex items-center justify-end'>
            <div className='w-1/6 mr-10 flex justify-evenly'>
                <Link to='/about' className={`hover:${exploreUrlChecker? "text-white" : "text-slate-600"} text-[#504e68] hover:font-semibold text-md p-2 rounded-md`}>About Us</Link>
                <Link to='/contact' className={`hover:${exploreUrlChecker? "text-white" : "text-slate-600"} text-[#504e68] hover:font-semibold text-md p-2 rounded-md`}>Contact</Link>
                <Link to='/help' className={`hover:${exploreUrlChecker? "text-white" : "text-slate-600"} text-[#504e68] hover:font-semibold text-md p-2 rounded-md`}>Help</Link>
            </div>
        </div>
    )
}
