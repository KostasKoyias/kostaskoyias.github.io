import { interests, birthday, alertMsg, focus } from './config.js'
import { getAge, Spinner } from '../utils.js'
import { githubUser, githubHeaders } from '../config.js'

class Intro extends React.Component {
    constructor() {
        super()
        this.state = {
            alert: false,
            isCallDone: false,
            avatar: null,
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
            .then(d => this.onMount(d))
            .catch(error => { this.setState({ alert: true }); console.error(error) })
    }

    onMount(data) {
        let status = []
        /**
         * @param {{alias: string, icon: string!}} value
         */
        for (const [key, value] of Object.entries(this.state.details)) {
            if (!data[key]) { // omit missing status properties
                continue
            }

            let actualKey = value.alias || key
            status.push(
                <li key={actualKey} className="nav-item">
                    <i className={value.icon} />
                    <span className="underline">
                        {actualKey.capitalize()}
                        {": " + data[key]}
                    </span>
                </li>
            )
        }

        this.setState({
            avatar: data["avatar_url"],
            isCallDone: true,
            status:
                status.length ?
                    <div id="status">
                        <br />
                        <h5 className="card-title">Current Status</h5>
                        {status}
                    </div>
                    :
                    null
        })
    }

    render() {

        return <div id="intro" className="card">
            {this.state.avatar && <img src={this.state.avatar} alt="picture" />}
            <div className="card-body">
                <h5 className="card-title">About myself</h5>
                <div className="card-text">
                    <div id="personal-info">
                        {"My name is Konstantinos Koyias & I am " + getAge(birthday) + " years old."}<br />
                        {"Obtained a B.Sc in Informatics and Telecommunications at "}
                        <a href="https://www.di.uoa.gr/eng" target="_blank">DiT UoA</a>
                        {" in September 2020"}
                        <br />
                        {"concentrated in Data & Knowledge Management as well as Software Engineering."},
                        <div id="specialization">
                            <br />
                            {focus}
                        </div>
                        <div id="interests">
                            <br />I am also interested in
                            <ul id="passion">
                                {interests.map((inst, i) => <li key={i}>{inst}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                {this.state.isCallDone ?
                    this.state.alert ?
                        <div className="alert alert-warning">{alertMsg}</div>
                        :
                        this.state.status
                    :
                    Spinner("dark")}
            </div>
        </div>
    }
}

export default Intro