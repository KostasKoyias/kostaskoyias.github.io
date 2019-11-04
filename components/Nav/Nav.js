import { items } from './config.js'

function Nav(){

    // create a navbar item for each section
    const navItems = items.map((item, i) => 
            React.createElement("li", {key: i, className: "nav-item"}, 
                React.createElement("a", {className: "nav-link", ...item.props}, item.title)))

    return (
        React.createElement("nav", {className: "navbar navbar-dark bg-dark"},
            React.createElement("a", 
                {id: "hub-link", target: "blank", 
                href: "https://github.com/KostasKoyias?tab=repositories"}, 
                React.createElement("img", {
                        src: "https://avatars2.githubusercontent.com/u/39647320?s=460&v=4", 
                        id: "avatar", alt: "avatar", title: "GitHub"
                })
            ),
            React.createElement("ul", {id: "nav-list"}, navItems)
        )
    )
}    

export default Nav