import { items } from './config.js'

function Nav() {

    // create a navbar item for each section
    const navItems = items.map((item, i) =>
        <li key={i} className="nav-item">
            <a className="nav-link" {...item.props}>{item.title}</a>
        </li>)

    return (
        <nav className="navbar navbar-dark bg-dark">
            <a id="hub-link" href="#">
                <i className="fab fa-github" />
            </a>
            <ul id="nav-list">{navItems}</ul>
        </nav>
    )
}

export default Nav