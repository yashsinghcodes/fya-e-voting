import {HomeBackground} from '../components/HomeBackground'
import { Navbar } from '../components/Navbar'
import { Vote } from '../components/Vote'
import VoteContext from '../context/voteContext/VoteContext'
import { useContext } from 'react'
import { ethers } from 'ethers'

export const Home = () => {
    const {connectWallet} = useContext(VoteContext);
    return (
        <>
            <div className="bg-[#6C63FF] overflow-hidden w-full" style={{ height: "100vh" }}>
                <HomeBackground />
                <Vote/>
            </div>
        </>
    )
}