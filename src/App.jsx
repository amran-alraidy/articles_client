import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Componnents/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Articles from './pages/Articles'
import Home from './pages/Home'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
