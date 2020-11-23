import { e } from '../utils.js'
import { hosts, topics } from './config.js'


/* Hosts NavBar */
function makeHosts() {
    const icons = hosts.map(makeIcon.bind(this))
    return e("h1", { className: "display-4" }, "Projects on ", icons)
}

function makeIcon(host, index) {
    const className = host.icon + " host-icon " + (index != this.state.host ? "inactive" : "active")
    const props = {
        title: host.icon.split("-")[1],
        "data-index": index,
        className: className,
        key: index,
        onClick: this.switchHost.bind(this)
    }

    return e("i", props)
}

/* Topics NavBar */
function makeTopics() {
    this.makeTopic = makeTopic.bind(this)
    const projects = this.state.projects.map(this.makeTopic)

    return e("nav", { id: "topics" }, e("ul", { className: "nav-list" }, projects))
}

function makeTopic(project, index) {
    const isMainTopic = index === this.state.topic
    const className = "topic " + (isMainTopic ? "active" : "inactive")

    return (e("li", { key: index, className: className, onClick: _ => this.setState({ topic: index }) }, project.key,
        e("i", { key: index, className: topics[project.key].icon })))
}

export { makeTopics, makeHosts }