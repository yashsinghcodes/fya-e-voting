import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../components/Card';
import VoteContext from '../context/voteContext/VoteContext';
import { useNavigate } from 'react-router-dom';
export const Voting = () => {
  const { state, getContractInfo } = useContext(VoteContext);
  const { contract } = state;
  const [candArr, setCandArr] = useState([]);
  const Navigate = useNavigate();
  // useEffect(() => {
    // getContractInfo();
    const readData = async () => {
      const len = await contract.methods.candidateCount().call();
      console.log(len)
      for (let i = 0; i < len; i++) {
        candArr.push(await contract.methods.candDetails(i).call())
      }
    }
    readData();
  // }, [])
  console.log(candArr)

  return (
    <div className='flex items-center flex-col'>
      <h1 className='mt-4 text-3xl font-semibold'>Sample Voting</h1>
      <div className='mt-32 grid grid-cols-4 gap-20'>
        {candArr.map((c) => {
          return <Card key={c.id} candidate={c} />;
        })}
      </div>
    </div>
  )
}
