import { Routes, Route, Link } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Explore } from './pages/Explore'
import { Voting } from './pages/Voting'
import { Contact } from './pages/Contact'
import { Help } from './pages/Help'
import { useContext, useEffect } from 'react';
import VoteContext from './context/voteContext/VoteContext';

const App = () => {
  const {connectedAccount} = useContext(VoteContext);
  let exploreUrlChecker = window.location.href.indexOf("explore") !== -1;
  useEffect(()=>{
    exploreUrlChecker = window.location.href.indexOf("explore") !== -1;
  },[])
  return (
    <div className="overflow-hidden w-full" style={{ height: "100vh" }}>
      <Link to="/" className={`absolute ${exploreUrlChecker ? "text-white" : "text-[#504e68]"} z-10 font-semibold top-14 left-14 text-2xl`}>E-VOTING</Link>
      {connectedAccount && <p className='absolute text-sm right-10 top-14 z-10'><strong className='text-base'>Account Address</strong> : <br/> {connectedAccount}</p>}
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/explore' element={<Explore />} />
        <Route exact path='/voting' element={<Voting />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/help' element={<Help />} />
      </Routes>
    </div>
  )
}

export default App
