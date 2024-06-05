
import './App.css'
import React from 'react'
import Home from './components/Home/Home'
import MORS from './components/MORS/MORS'
import Pushover from './components/Pushover/Pushover'
import { BrowserRouter as Router, Route , Routes,} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mors" element={<MORS />} />
          <Route path="/pushover" element={<Pushover />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
