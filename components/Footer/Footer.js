import { cols } from './config.js'
import { itemToColumn } from './methods.js'

function Footer(){

  return (
    React.createElement("footer", {id: "footer", className: "page-footer font-small pt-4"},
      React.createElement("div", {className: "container-fluid text-center text-md-left"},
        React.createElement("div", {className: "row"}, cols.map(itemToColumn)),
      )
    ))
}

export default Footer