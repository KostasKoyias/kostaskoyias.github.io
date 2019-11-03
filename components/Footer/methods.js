const addKey = ((item, index) => {return {...item, key: index}})

function itemToColumn(col, index){
    return React.createElement(
        "div", 
        {key: index, className: col.pos}, 
        col.children
    )
}

function itemToAnchorList(link, index){
    return React.createElement(
        "li", {key: index, className: "nav-item"},
        React.createElement("a", {className: "nav-link", ...link.props},
            React.createElement("i", {className: link.icon}),
            link.msg
        )
    )
}

export { itemToColumn, addKey, itemToAnchorList }