import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import VoteContext from '../context/voteContext/VoteContext';
export const Vote = () => {
  const { connectWallet } = useContext(VoteContext);
  return (
    <div className='text-white w-1/3 relative m-56 z-[2]'>
        <h1 className='text-4xl font-bold my-4'>Make Digital Voting System</h1>
        <p>This is an Blockchain Based E-Voting System which lets you create your own E-Voting system.</p>
        <button onClick={connectWallet} className='relative top-6 py-3 px-10 hover:shadow-xl bg-white text-[#6C63FF] font-semibold rounded-full'>Vote Now</button>
    </div>
  )
}
