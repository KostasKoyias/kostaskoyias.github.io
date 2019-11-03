import Nav from './Nav/Nav.js'
import Intro from './Intro/Intro.js'
import Work from './Work/Work.js'
import Footer from './Footer.js'

function App(){

  return (
    React.createElement("div", null, 
      React.createElement(Nav),
      //React.createElement(Intro, {id: "about"}),
      //React.createElement(Work, {id: "work"}),
      //React.createElement(Footer, {id: "contact"})

      React.createElement("h1", {
          className: "display-4",
          style: {marginTop: "5rem" ,textAlign: "center", fontSize: "200%"}},
          "This site is under construction...")
    ))
}

export default App