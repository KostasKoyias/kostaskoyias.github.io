import React from 'react'
import {hosts, topics} from './config'
import { createIcon } from '../utils';

/* Hosts NavBar */
function makeHosts() {
    const icons = hosts.map(makeIcon.bind(this))
    return <h1 className="display-4">
        {"Projects on"}
        {icons}
    </h1>
}

function makeIcon(host, index) {
    const className = "host-icon " + (index !== this.state.host ? "inactive" : "active")
    const props = {
        className: className,
        key: index,
        size: "lg",
        onClick: () => this.switchHost.bind(this)(index)
    }

    return createIcon(host.icon, props)
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
    const icon = topics[project.key].icon

    return <li key={index} className={className} onClick={_ => this.setState({ topic: index })}>
        {project.key}
        {icon && createIcon(icon, { size: "lg"})}
    </li>
}

export { makeTopics, makeHosts }