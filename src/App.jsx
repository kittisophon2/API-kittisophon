import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Course from './pages/course'
import Chapter from './pages/chater'

const App = () => {
  return (
    
    <Router>
    <Routes>
    <Route path="/" element={<Course/>}/>
    <Route path="/course/:id" element={<Chapter/>}/>
    </Routes>  
    </Router>
    
  )
}

export default App