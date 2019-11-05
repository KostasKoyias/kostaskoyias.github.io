import { items } from './config.js'

function Nav(){

    // create a navbar item for each section
    const navItems = items.map((item, i) => 
            React.createElement("li", {key: i, className: "nav-item"}, 
                React.createElement("a", {className: "nav-link", ...item.props}, item.title)))

    return (
        React.createElement("nav", {className: "navbar navbar-dark bg-dark"},
            React.createElement("a", {id: "hub-link", href: "#"},
                React.createElement("i", {className: "fab fa-github"})),
            React.createElement("ul", {id: "nav-list"}, navItems)
        )
    )
}    

export default Nav