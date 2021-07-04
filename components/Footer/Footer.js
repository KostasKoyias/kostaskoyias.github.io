import { cols } from './config.js'
import { itemToColumn } from './methods.js'

const e = React.createElement

function Footer() {

  return (
    e("footer", { id: "footer", className: "page-footer font-small pt-4" },
      e("div", { className: "container-fluid text-center text-md-left" },
        e("div", { className: "row" }, cols.map(itemToColumn)),
      ),
      e("div", { className: "footer-copyright text-center py-3" }, "Published with ",
        e("a", { target: "_blank", href: "https://pages.github.com/" }, "GitHub Pages"))
    ))
}

export default Footer