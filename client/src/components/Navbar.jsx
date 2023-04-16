import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import VoteContext from '../context/voteContext/VoteContext';
export const Navbar = () => {
    const { state, connectedAccount } = useContext(VoteContext);
    const Navigate = useNavigate();
    let adminUrlChecker = window.location.href.indexOf("admin") !== -1;
    const handleClick = async()=>{
        const owner = await state.contract.methods.owner().call();
        console.log(owner.toLowerCase())
        if(owner.toLowerCase() !== connectedAccount){
            return alert("You are not Admin!");
        }
        Navigate("/admin")
    }
    return (
        <div className='fixed bottom-2 z-20 h-14 w-full flex items-center justify-end'>
            {!adminUrlChecker && state.contract && <button onClick={handleClick} className='absolute hover:shadow-2xlxl left-10 bg-white px-4 py-2 rounded-full text-[#6C63FF] font-semibold'>Admin</button>}
            <div className='w-1/6 mr-10 flex justify-evenly'>
                <Link to='/about' className={`text-[#504e68] hover:text-slate-600 hover:font-semibold text-md p-2 rounded-md`}>About Us</Link>
                <Link to='/contact' className={`text-[#504e68] hover:text-slate-600 hover:font-semibold text-md p-2 rounded-md`}>Contact</Link>
                <Link to='/help' className={`text-[#504e68] hover:text-slate-600 hover:font-semibold text-md p-2 rounded-md`}>Help</Link>
            </div>
        </div>
    )
}
