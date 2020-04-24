import { e, Card } from '../utils.js'
import { api, grid, topics } from './config.js'

// add an icon to the title if the repository is starred
// but distinguish current repository from the others
function getTitle(repo){

    if(window.location.hostname === repo.name)
        return e("span", null, repo.name, e("i", {className: "fas fa-globe"}))
    else if(repo.watchers > 0)
        return e("span", null, repo.name, e("i", {className: "far fa-star"}))
    else
        return repo.name
}

// given a detailed repository description
// create a card element out of the most important properties
function repoToCard(repo, index){

    // if repo has a web-page and it is not this repo, link to the web-page else to the source code
    const link = (repo => repo.homepage && repo.homepage !== window.location.href ? repo.homepage : repo.html_url)

    const props = {
        title: getTitle(repo),
        description: repo.description,
        urls: [{name: "Check it out", href: link(repo)}],
        language: repo.language || "None",
        //stars: repo.watchers,
        key: repo.node_id
    }

    return Card(props)
}

// create a row-column type grid filled with cards
function cardGrid(list){
    let rv = []
    for(let i = 0; i < list.length; i += grid.cardsPerRow)
        rv.push(e("div", { className: "row"}, 
            list.slice(i, i + grid.cardsPerRow)
            .map((c, index) => e("div", {key: i + index, className: "col-md-" + grid.rows/grid.cardsPerRow}, c))))
    return rv
}

// create a card grid out of repository meta-data, customizing the order
function makeProjects(response){
    
    // starred projects go first, putting the most recently modified ones on top
    response.sort((r0, r1) => new Date(r0.pushed_at) - new Date(r1.pushed_at))
            .sort((r0, r1) => r0.watchers - r1.watchers)
    
    // classify repos, assigning each to the appropriate topic list
    response.forEach(repo => {
        const topic = getTopic(repo)
        topics.map[topic].list = [repo, ...(topics.map[topic].list || [])]
    })

    // create a card grid for each topic
    let projects = []
    for(const key in topics.map)
        projects.push(
            Object({key: key,  
                    body: topics.map[key].list && cardGrid(topics.map[key].list.map(repoToCard))}))

    return projects
}

// classify each project to the very first matching topic
function getTopic(repo){
    if(repo.fork)
        return "forks-contributions"

    for(let topic in topics.map)
        if(repo.topics.find(name => name.toLowerCase().includes(topic.toLowerCase())))
            return topic
    
    return "other"
}

function makeTopics(){
    this.makeHeader = makeHeader.bind(this)
    const projects = this.state.projects.map(this.makeHeader)

    return e("nav", {id: "topics"},  e("ul", {className: "nav-list"}, projects))
}

function makeHeader(project, index){
    const isMainTopic = index === this.state.topic
    const className = "topic " + (isMainTopic ? "topic-active" : "topic-inactive")

    return (e("div", {className: className, onClick: _ => this.setState({topic: index})}, project.key,
            e("i", {className: topics.map[project.key].icon}))) 
}

export { makeProjects, makeTopics }
