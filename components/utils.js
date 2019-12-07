const e = React.createElement
const addKey = ((item, index) => {return {...item, key: index}})

function getAge(birthday){
    const present = new Date("2020-01-01"), birthDate = new Date(birthday)
    const years = present.getFullYear() - birthDate.getFullYear()
    console.log(present.getFullYear(), birthDate.getFullYear(), birthday)

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
    const { key, title, description, urls, ...rest } = props 
    const maxDescription = 100, croppedDescription = description.slice(0, maxDescription) + "..."
    const linkProps = {target: "_blank", className: "card-link"}

    return (e("div", {key: key, className: "card"}, 
                e("h5", {className: "card-title"}, title), 
                e("div", {className: "card-body"},
                    e("div", {className: "card-text"}, 
                        //description,
                        (description.length > maxDescription ? croppedDescription : description),
                        e("ul", null, Object.keys(rest)
                        .map((k, i) => e("li", {key: i}, e("span", null, k), ": " + rest[k]))),
                        urls.map((u, i) => e("a", {href: u.href, key: i, ...linkProps}, u.name))
                    )
                )
            ))
}

export { e, getAge, addKey, Spinner, Card }