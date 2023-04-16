import React from 'react'

export const About = () => {
  return (
    <div className='w-full bg-[#6C63FF] h-full flex flex-col items-center justify-center'>
      <svg className='absolute top-0 -left-4' width="355" height="396" viewBox="0 0 355 396" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M354.221 9.64634C354.221 114.304 39.2214 218.646 7.22134 395.646C-99.0935 395.646 -13.2786 213.849 -13.2786 109.191C-13.2786 4.53337 -46.5935 -11.3086 59.7214 -11.3086C166.036 -11.3086 354.221 -95.0116 354.221 9.64634Z" fill="#F2F2F2" />
      </svg>

      <h1 className='text-5xl text-white mb-10 font-semibold'>About Us</h1>
      <p className='w-1/2 text-white text-xl'>LulzSec is a private software solution company, focusing to find innocatinve solutions of Real World Problems. Currently E-Voting is our running profuct. We make contracts with government and different organizations for conducting elections. You can find and create custum votes as per your need. For more queries contact us.</p>

      <svg className='absolute bottom-0 right-0' width="414" height="294" viewBox="0 0 414 294" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1264.5 458.161C1264.5 701.443 1050.57 943.661 809.5 943.661C568.427 943.661 13.9998 1085.16 0 465.161C-0.000137329 -136.339 586.927 17.6611 827.999 17.6611C1069.07 17.6611 1264.5 214.88 1264.5 458.161Z" fill="#F2F2F2" />
      </svg>
    </div>
  )
}
