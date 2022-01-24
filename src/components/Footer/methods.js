import React from 'react'
import { createIcon } from '../utils'


const itemToColumn = (col, index) => <div key={index} className={col.pos}>{col.children}</div>

const itemToAnchorList = (link, index) => (
        <li key={index} className="nav-item">
            <a className={link.props.className || "nav-link"} {...link.props}>
                {createIcon(link.icon, { size: "lg"})}
                {link.msg}
            </a>
        </li>)

export { itemToColumn, itemToAnchorList }