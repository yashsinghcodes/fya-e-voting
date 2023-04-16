import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import VoteContext from '../context/voteContext/VoteContext';
export const Explore = () => {
  const btnStyle = "py-3 m-6 px-10 text-lg hover:shadow-xl font-semibold rounded-full";
  const exploreHead = "text-4xl font-semibold"
  const exploreContainer = "flex flex-col justify-center items-center"
  const Navigate = useNavigate()

  const handleClick = ()=>{
    Navigate("/voting")
  }

  return (
    <div className='w-full flex h-full'>
      <div className={`w-1/2 h-full bg-[#6C63FF] ${exploreContainer}`}>
        <h1 className={`${exploreHead} text-white`}>Request for Custom Polls</h1>
        <button className={`${btnStyle} bg-white text-[#6C63FF]`}>Request</button>
      </div>
      <div className={`bg-white w-1/2 ${exploreContainer}`}>
        <h1 className={`${exploreHead} text-[#6C63FF]`}>Explore Others Polls</h1>
        <button onClick={handleClick} className={`${btnStyle} bg-[#6C63FF] text-white`}>Explore</button>
      </div>
    </div>
  )
}
