const e = React.createElement
const addKey = ((item, index) => {return {...item, key: index}})

function getAge(birthday){
    const present = new Date(), birthDate = new Date(birthday)
    const years = present.getFullYear() - birthDate.getFullYear()

    if(present.getMonth() < birthDate.getMonth() || 
        (present.getMonth() === birthDate.getMonth() && present.getDay() < birthDate.getDay()))
        return years - 1
    return years
}

// a simple loading spinner
function Spinner(type){
    return(e("div", {className: "spinner-border text-" + type, role: "status"}))
}

// create a Card Component with title, description, an unordered list of properties and a list of links
function Card(props){
    const { key, title, description, avatar, urls, ...rest } = props 
    const maxDescription = 200, croppedDescription = description.slice(0, maxDescription) + "..."
    const linkProps = {target: "_blank", className: "card-link"}
    const logo = avatar && e("img", {key: Math.max(...title.map(t => t.key)) + 1, className: "card-logo", src: avatar})

    return (e("div", {key: key, className: "card"}, 
                e("h5", {className: "card-title"}, [...title, logo]), 
                e("div", {className: "card-body"},
                    e("div", {className: "card-text"}, 
                        (description.length > maxDescription ? croppedDescription : description),
                        e("ul", null, Object.keys(rest)
                        .map((k, i) => e("li", {key: i}, e("span", null, k), ": " + rest[k]))),
                        urls.map((u, i) => e("a", {href: u.href, key: i, ...linkProps}, u.name))
                    ))))
}

export { e, getAge, addKey, Spinner, Card }