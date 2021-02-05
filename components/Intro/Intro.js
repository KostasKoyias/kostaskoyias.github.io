import { interests, birthday, alertMsg, picture, focus } from './config.js'
import { e, getAge, Spinner } from '../utils.js'
import { githubUser, githubHeaders } from '../config.js'


class Intro extends React.Component {
    constructor() {
        super()
        this.state = {
            alert: false,
            isCallDone: false,
            details: {
                "bio": { alias: "position", icon: "fas fa-briefcase" },
                "company": { icon: "fas fa-building" },
                "location": { icon: "fas fa-map-marker-alt" }
            }
        }
    }

    componentDidMount() {
        fetch(githubUser, { headers: githubHeaders })
            .then(httpResponse => httpResponse.json())
            .then(data => this.setState({ details: this.setStatus(data), isCallDone: true }))
            .catch(error => { this.setState({ alert: true }); console.error(error) })
    }

    setStatus(data) {
        let status = []
        for (const [key, value] of Object.entries(this.state.details)) {
            if (!data[key]) { // omit missing status properties
                continue
            }

            let actualKey = value.alias || key
            status.push(
                e("li", { key: actualKey, className: "nav-item " },
                    e("i", { className: value.icon }),
                    e("span", { className: "underline" }, actualKey.capitalize()), ": " + data[key]
                )
            )
        }

        this.setState({
            status:
                status.length ?
                    e("div", { id: "status" },
                        e("br"), e("h5", { className: "card-title" }, "Current Status"),
                        status
                    )
                    :
                    null
        })
    }

    render() {

        return (e("div", { id: "intro", className: "card" },
            e("img", { src: picture, alt: "picture" }),
            e("div", { className: "card-body" },
                e("h5", { className: "card-title" }, "About myself"),
                e("div", { className: "card-text" },
                    e("div", { id: "personal-info" },
                        "My name is Konstantinos Koyias & I am " + getAge(birthday) + " years old.", e("br"),
                        "Obtained a B.Sc in Informatics and Telecommunications at ",
                        e("a", { href: "http://www.di.uoa.gr/eng", target: "_blank" }, "DiT, UoA"),
                        " in September 2020,", e("br"), "concentrated in Data & Knowledge Management as well as Software Engineering."),
                    e("div", { id: "specialization" }, e("br"), focus),
                    e("div", { id: "interests" },
                        e("br"), "I am also interested in",
                        e("ul", { id: "passion" },
                            interests.map((inst, i) => e("li", { key: i }, inst)))),
                ),
                this.state.isCallDone ?
                    this.state.alert ?
                        e("div", { className: "alert alert-warning" }, alertMsg)
                        :
                        this.state.status
                    :
                    Spinner("dark")
            )
        ))
    }
}

export default Intro