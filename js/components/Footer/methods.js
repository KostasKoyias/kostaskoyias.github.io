import { addKey } from '../utils.js'

function itemToColumn(col, index) {
    return <div key={index} className={col.pos}>{col.children}</div>
}

function itemToAnchorList(link, index) {
    const className = link.props.className || "nav-link"

    return (
        <li key={index} className="nav-item">
            <a className={className} {...link.props}>
                <i className={link.icon} />
                {link.msg}
            </a>
        </li>)
}

export { itemToColumn, addKey, itemToAnchorList }