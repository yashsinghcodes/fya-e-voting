import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../components/Card';
import VoteContext from '../context/voteContext/VoteContext';
import { useNavigate } from 'react-router-dom';
export const Voting = () => {
  const [candArr, setCandArr] = useState([0,1,2,3]);
  return (
    <div className='flex items-center flex-col'>
      <h1 className='mt-14 text-3xl font-semibold'>Sample Voting</h1>
      <div className='mt-32 grid grid-cols-4 gap-20'>
        {candArr.map((c) => {
          return <Card key={c} id={c} />;
        })}
      </div>
    </div>
  )
}
