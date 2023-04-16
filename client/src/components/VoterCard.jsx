import React, { useContext, useEffect, useState } from 'react'
import VoteContext from '../context/voteContext/VoteContext';
import { useNavigate } from 'react-router-dom';


export const VoterCard = ({ id }) => {
    const { state, connectedAccount } = useContext(VoteContext);
    const { contract } = state;
    const [voter, setVoter] = useState({ img_url: "", party_name: "", voteCount: 0 });
    const Navigate = useNavigate()

    useEffect(() => {
        const readData = async () => {
            const owner = await contract.methods.owner().call();
            console.log(owner.toLowerCase())
            if(owner.toLowerCase() !== connectedAccount){
                return Navigate("/")
            }
            setVoter(await contract.methods.voterDetails(id).call());
        }
        readData();
    }, [id]);
    return (
        <>
            <div className='w-64 rounded-md shadow-[0_0_25px_#b6b7ea] flex flex-col items-start p-4 bg-slate-100'>
                <p className=' text-lg'>Name : <span className='text-lg text-slate-500'>{voter.name}</span></p>
                <p className='mt-4 text-lg'>Addhar : <span className='text-lg text-slate-500'>{voter.aadhar}</span></p>
                <p className='mt-4 text-lg'>Vote Status : <span className='text-lg text-slate-500'>{voter.hasVoted ? "Voted!" : "Not Voted!"}</span></p>
            </div>
        </>
    )
}
