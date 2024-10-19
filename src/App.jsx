import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Magazine from './Pages/Magazine'
import Footer from './Components/Footer'
import Event from './Pages/Event'
import Team from './Pages/Team'
import Contact from './Pages/Contact'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/events' element={<Event />} />
          <Route path='magazine' element={<Magazine />} />
          <Route path='team' element={<Team />} />
          <Route path='contact' element={<Contact />} />
          <Route />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App