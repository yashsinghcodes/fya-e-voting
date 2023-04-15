import { Routes, Route, Link } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Explore } from './pages/Explore'
import { Contact } from './pages/Contact'
import { Help } from './pages/Help'
const App = () => {
  return (
    <div className="bg-[#6C63FF] overflow-hidden w-full" style={{ height: "100vh" }}>
      <Link to="/" className='absolute text-[#504e68] z-10 font-semibold top-14 left-14 text-2xl'>E-VOTING</Link>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/explore' element={<Explore />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/help' element={<Help />} />
      </Routes>
    </div>

  )
}

export default App
