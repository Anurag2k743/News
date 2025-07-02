
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Education from './pages/Education'
import Sports from './pages/Sports'
import Business from './pages/Business'

function App() {

  return (
    <>
      <div className='flex justify-center items-center'>
        <Navbar />
        <div className='mt-16'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/education" element={<Education />} />
            <Route path="/sports" element={<Sports />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
