import React, { useContext, useEffect, useState } from 'react'
import VoteContext from '../context/voteContext/VoteContext';


export const Card = ({ id }) => {
    const { state, connectedAccount } = useContext(VoteContext);
    const { contract } = state;
    const [candidate, setCandidate] = useState({ img_url: "", party_name: "" });

    const handleClick = async () => {
        const VoterDetails = await contract.methods.voterDetails(connectedAccount).call();
        const hasVoted = await contract.methods.checkVoted(connectedAccount).call();
        if (hasVoted){
            alert("User Has Already Voted");
        }
        else{
            const data = await contract.methods.voting(id).send({from: connectedAccount});
            console.log(connectedAccount)
            alert("Your Vote has been Recorded!");
        }
    }

    useEffect(() => {
        const readData = async () => {
            setCandidate(await contract.methods.getCandid(id).call());
        }
        readData();
    }, [id]);
    return (
        <>
            <div className='w-64 h-64 rounded-md shadow-[0_0_25px_#b6b7ea] flex flex-col items-center p-4 bg-slate-100'>
                <img className='w-28 h-28' src={candidate.img_url} alt="" />
                <span className='mt-4 text-[#0BA046] text-2xl'>{candidate.party_name}</span>
                <button onClick={handleClick} className='px-12 py-2 text-white text-lg rounded-lg mt-3 hover:bg-[#574fe7] bg-[#6C63FF]'>Vote</button>
            </div>
        </>
    )
}
