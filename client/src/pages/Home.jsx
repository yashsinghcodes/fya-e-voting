import {HomeBackground} from '../components/HomeBackground'
import { Navbar } from '../components/Navbar'
import { Vote } from '../components/Vote'

export const Home = () => {
    return (
        <>
            <div className="bg-[#6C63FF] overflow-hidden w-full" style={{ height: "100vh" }}>
                <HomeBackground />
                <Vote/>
            </div>
        </>
    )
}
