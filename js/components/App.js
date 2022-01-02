import Nav from './Nav/Nav.js'
import Intro from './Intro/Intro.js'
import Work from './Work/Work.js'
import Footer from './Footer/Footer.js'

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