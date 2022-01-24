import React from 'react'
import {hosts, topics} from './config'
import { createIcon } from '../utils';

/* Hosts NavBar */
const makeHosts = (selectedHostId, selectHostCallback) => {
    const icons = hosts.map((host, hostId) => createIcon(host.icon, {
        className: `host-icon  ${(hostId !== selectedHostId ? "inactive" : "active")}`,
        key: hostId,
        size: "lg",
        "onClick": () => selectHostCallback(hostId)
    }))

    return <h1 className="display-4">
        {"Projects on"}
        {icons}
    </h1>
}

/* Topics NavBar */
const makeTopics = (projects, mainTopic, setMainTopic) => {
    return (
        <nav id="topics">
            <ul className="nav-list">{projects.map((project, projectId) => makeTopic(project, projectId, mainTopic, setMainTopic))}</ul>
        </nav>
    )
}

const makeTopic = (project, projectId, mainTopic, setMainTopic) => {
    const isMainTopic = projectId === mainTopic
    const className = "topic " + (isMainTopic ? "active" : "inactive")
    const icon = topics[project.key].icon

    return <li key={projectId} className={className} onClick={_ => setMainTopic(projectId)}>
        {project.key}
        {icon && createIcon(icon, { size: "lg"})}
    </li>
}

export { makeTopics, makeHosts }