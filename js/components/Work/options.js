import { hosts, topics } from './config.js'


/* Hosts NavBar */
function makeHosts() {
    const icons = hosts.map(makeIcon.bind(this))
    return <h1 className="display-4">
        {"Projects on"}
        {icons}
    </h1>
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

    return <i {...props} />
}

/* Topics NavBar */
function makeTopics() {
    this.makeTopic = makeTopic.bind(this)
    const projects = this.state.projects.map(this.makeTopic)

    return (
        <nav id="topics">
            <ul className="nav-list">{projects}</ul>
        </nav>
    )
}

function makeTopic(project, index) {
    const isMainTopic = index === this.state.topic
    const className = "topic " + (isMainTopic ? "active" : "inactive")

    return <li key={index} className={className} onClick={_ => this.setState({ topic: index })}>
        {project.key}
        {<i key={index} className={topics[project.key].icon} />}
    </li>
}

export { makeTopics, makeHosts }