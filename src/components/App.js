import React from 'react'
import Nav from './nav/Nav'
import Intro from './intro/Intro'
import Work from './work/Work'
import Footer from './footer/Footer'

const App = () => (
	<div>
		<Nav />
		<Intro id="about" />
		<Work id="work" />
		<Footer id="contact" />
	</div>)

export default App