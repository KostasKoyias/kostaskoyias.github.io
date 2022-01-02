const addKey = ((item, index) => { return { ...item, key: index } })

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function getAge(birthday) {
    const present = new Date(), birthDate = new Date(birthday)
    return new Date(new Date(present.getTime() - birthDate.getTime())).getUTCFullYear() - 1970
}

// a simple loading spinner
function Spinner(type) {
    return <div className={"spinner-border text-" + type} role="status"></div>
}

// create a Card Component with title, description, an unordered list of properties and a list of links
function Card(props) {
    const { key, title, description, avatar, urls, ...rest } = props
    const maxDescription = 200, croppedDescription = description.slice(0, maxDescription) + "..."
    const linkProps = { target: "_blank", className: "card-link" }
    const logo = avatar && <img key={Math.max(...title.map(t => t.key)) + 1} className="card-logo" src={avatar} />

    return (<div key={key} className="card">
        <h5 className="card-title">{[...title, logo]}</h5>
        <div className="card-body">
            <div className="card-text">
                {description.length > maxDescription ? croppedDescription : description}
                <ul>{Object.keys(rest)
                    .map((k, i) => <li key={i}><span className="bold">{k}</span>{": " + rest[k]}</li>)}
                    {urls.map((u, i) => <a href={u.href} key={i} {...linkProps}>{u.name}</a>)}
                </ul>
            </div>
        </div>
    </div>)
}

export { getAge, addKey, Spinner, Card }