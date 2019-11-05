import { e, addKey } from '../utils.js'

function itemToColumn(col, index){
    return e("div", {key: index, className: col.pos}, col.children)
}

function itemToAnchorList(link, index){
    return e("li", {key: index, className: "nav-item"},
                e("a", {className: "nav-link", ...link.props},
                    e("i", {className: link.icon}), link.msg))
}

export { itemToColumn, addKey, itemToAnchorList }