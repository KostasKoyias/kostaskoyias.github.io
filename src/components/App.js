import React from 'react'
import Nav from './Nav/Nav'
import Intro from './Intro/Intro'
import Work from './Work/Work'
import Footer from './Footer/Footer'

function App() {
  return (
    <div>
      <Nav />
      <Intro id="about" />
      <Work id="work" />
      <Footer id="contact" />
    </div>)
}

export default App