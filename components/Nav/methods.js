function itemToNav(item, index){
    return (
        React.createElement("li", {key: index, className: "nav-item"}, 
            React.createElement("a", {className: "nav-link", href: item.href}, item.title)
        )
    )
}

export { itemToNav }