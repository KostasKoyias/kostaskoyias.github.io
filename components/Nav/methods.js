function handler(e){
    const anchors = document.querySelectorAll("a[class = nav-link]")
    anchors.forEach(a => {
        console.log(a.href, e.target.href)
        a.dataset.on = (a.href === e.target.href)
        console.log(a.dataset.on)
    })
}

function itemToNav(item, index){
    return (
        React.createElement("li", {key: index, className: "nav-item"}, 
            React.createElement("a", {className: "nav-link", onClick: handler, ...item.props}, item.title)
        )
    )
}

export { itemToNav }