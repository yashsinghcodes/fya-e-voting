import React, { useState } from 'react'
import { Card } from '../components/Card';
import { VoterCard } from '../components/VoterCard';

export const Admin = () => {
    const candArr = [0, 1, 2, 3];
    const voterArr = ["0x37AfC9Bc5804Fbbb248f59650808AbAF320F2b80", "0x8fff0a7bf0De63bc0834D23FbeEa7C630CcD94D1", "0xF8B90B06CBd25146B0d1DC4372f1252973c2C9c3", "0xA1EA63BB04c851482815a79fE718E27BFB3F2914"];
    return (
        <div className='flex items-center flex-col'>
            <div>
                <h1 className='mt-32 text-3xl font-semibold'>Candidates</h1>
                <div className='mt-10 grid grid-cols-4 gap-20'>
                    {candArr.map((c) => {
                        return <Card key={c} id={c} />;
                    })}
                </div>
            </div>
            <div>
                <h1 className='mt-10 text-3xl font-semibold'>Voters</h1>
                <div className='mt-10 grid grid-cols-4 gap-20'>
                    {voterArr.map((v) => {
                        return <VoterCard key={v} id={v} />;
                    })}
                </div>
            </div>
        </div>
    )
}
