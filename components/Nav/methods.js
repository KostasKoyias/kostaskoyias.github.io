// emphasize the section selected(e.g Contact)
function handler(e){
    const anchors = document.querySelectorAll("a[class = nav-link]")
    anchors.forEach(a => a.dataset.on = (a.href === e.target.href))
}

function itemToNav(item, index){
    return (
        React.createElement("li", {key: index, className: "nav-item"}, 
            React.createElement("a", {className: "nav-link", onClick: handler, ...item.props}, item.title)
        )
    )
}

export { itemToNav }