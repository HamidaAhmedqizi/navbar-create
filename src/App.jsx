import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar/Navbar'
import Services from './pages/Services'
import Unity from './pages/Unity/Unity'
import Ehtrade from './pages/Ehtrade/Ehtrade'
import YusifMMC from './pages/YusifMMC/YusifMMC'
import NavHeader from './components/NavHeader/NavHeader'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavHeader />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          {/* Doğru yolları kullanın */}
          <Route path='/unity' element={<Unity />} />
          <Route path='/ehtrade' element={<Ehtrade />} />
          <Route path='/yusifummmc' element={<YusifMMC />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;