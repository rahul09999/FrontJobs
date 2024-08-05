import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return(
    <Router>
      {/* <h1>Hello</h1> */}
      <Navbar />
      <Hero />
      <HomeCards />
      <ViewAllJobs />
    </Router>

  )
  
}

export default App