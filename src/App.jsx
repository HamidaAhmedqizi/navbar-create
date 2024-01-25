import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar/Navbar'
import Services from './pages/Services'
import Marketing from './pages/Marketing'
import Consulting from './pages/Consulting'
import Design from './pages/Design'
import Development from './pages/Development'

function App() {

  return (
    
    <>
      
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/marketing' element={<Marketing />} />
          <Route path='/consulting' element={<Consulting />} />
          <Route path='/design' element={<Design />} />
          <Route path='/development' element={<Development />} />

        </Routes>

      </BrowserRouter>

    </>
  )

}

export default App