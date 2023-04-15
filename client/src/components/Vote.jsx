import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import VoteContext from '../context/voteContext/VoteContext';
import {ethers} from "ethers";


export const Vote = () => {
  const { connectWallet } = useContext(VoteContext);
  return (
    <div className='text-white w-1/3 relative m-48 z-[2]'>
        <h1 className='text-4xl font-bold my-4'>Make Digital Vote</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo perspiciatis nihil veritatis, maiores numquam vel dolore molestiae ipsam fugit dolor fuga.</p>
<<<<<<< HEAD
        <button  className='relative top-8 py-4 px-10 bg-white text-[#6C63FF] text-lg font-semibold rounded-full'>Vote Now</button>
=======
        <button onClick={connectWallet} className='relative top-8 py-4 px-10 bg-white text-[#6C63FF] font-semibold rounded-full'>Vote Now</button>
>>>>>>> f419f7a2b87238978c5dfb1ed40645c3c69317a2
    </div>
  )
}
