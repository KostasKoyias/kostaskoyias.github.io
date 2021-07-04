import Nav from './Nav/Nav.js'
import Intro from './Intro/Intro.js'
import Work from './Work/Work.js'
import Footer from './Footer/Footer.js'

const e = React.createElement

function App() {

  return (
    e("div", null,
      e(Nav),
      e(Intro, { id: "about" }),
      e(Work, { id: "work" }),
      e(Footer, { id: "contact" })
    ))
}

export default App