import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/utilities/layout'
import Homepage from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'
import Features from './pages/Features'
import Footer from "./components/ui/Footer/footer.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/Home' element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/works' element={<Works />} />
          <Route path='/features' element={<Features />} />
          <Route path='/about' element={<About />} />
        </Route>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App