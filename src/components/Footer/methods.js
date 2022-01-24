import React from 'react'
import { createIcon } from '../utils'


function itemToColumn(col, index) {
    return <div key={index} className={col.pos}>{col.children}</div>
}

function itemToAnchorList(link, index) {
    const className = link.props.className || "nav-link"

    return (
        <li key={index} className="nav-item">
            <a className={className} {...link.props}>
                {createIcon(link.icon, { size: "lg"})}
                {link.msg}
            </a>
        </li>)
}

export { itemToColumn, itemToAnchorList }