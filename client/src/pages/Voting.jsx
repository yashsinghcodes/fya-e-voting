import React from 'react'
import {Card} from '../components/Card';
export const Voting = () => {
  
  return (
    <div className='flex items-center flex-col'>
      <h1 className='mt-4 text-3xl font-semibold'>Sample Voting</h1>
      <div className='mt-32 grid grid-cols-4 gap-32'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
