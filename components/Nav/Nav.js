import { items } from './config.js'

const e = React.createElement

function Nav() {

    // create a navbar item for each section
    const navItems = items.map((item, i) =>
        e("li", { key: i, className: "nav-item" },
            e("a", { className: "nav-link", ...item.props }, item.title)))

    return (
        e("nav", { className: "navbar navbar-dark bg-dark" },
            e("a", { id: "hub-link", href: "#" },
                e("i", { className: "fab fa-github" })),
            e("ul", { id: "nav-list" }, navItems)
        )
    )
}

export default Nav