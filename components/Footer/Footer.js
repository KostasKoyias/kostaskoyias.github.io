import { cols } from './config.js'
import { itemToColumn } from './methods.js'

function Footer(){

  return (
    React.createElement("footer", {id: "footer", className: "page-footer font-small pt-4"},
      React.createElement("div", {className: "container-fluid text-center text-md-left"},
        React.createElement("div", {className: "row"}, cols.map(itemToColumn)),
      ),
      React.createElement("div", { className: "footer-copyright text-center py-3"}, "Shared with ",
        React.createElement("a", {target: "blank", href: "https://pages.github.com/"}, "GitHub Pages"))
    ))
}

export default Footer