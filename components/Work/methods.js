import { e, Card } from '../utils.js'
import { grid, topics, blacklist } from './config.js'


// add an icon to the title if the repository is starred
// but distinguish current repository from the others
function isThisRepo(repo){return window.location.hostname === repo.name}
function makeTitle(repo){
    const name = e("span", {key: 0}, repo.name)

    if(isThisRepo(repo))
        return [name, e("i", {key: 1, className: "fas fa-globe"})]
    else if(repo.watchers > 0)
        return [name, e("i", {key: 1, className: "far fa-star"})]
    else
        return [name]
}

// given a detailed repository description
// create a card element out of the most important properties
function repoToCard(repo, index){

    // if repo has a web-page and it is not this repo, link to the web-page else to the source code
    const link = (repo => repo.homepage && !isThisRepo(repo) ? repo.homepage : repo.html_url || repo.links.html.href)

    const props = {
        title: makeTitle(repo),
        description: repo.description,
        urls: [{name: "Check it out", href: link(repo)}],
        language: repo.language || "None",
        //stars: repo.watchers,
        key: repo.node_id,
        avatar: repo.links && repo.links.avatar.href
    }

    return Card(props)
}

// create a row-column type grid filled with cards
function cardGrid(list){
    let rv = []
    for(let i = 0; i < list.length; i += grid.cardsPerRow)
        rv.push(e("div", {key: i, className: "row"}, 
            list.slice(i, i + grid.cardsPerRow)
            .map((c, index) => e("div", {key: i + index, className: "col-md-" + grid.rows/grid.cardsPerRow}, c))))
    return rv
}

// create a card grid out of repository meta-data, customizing the order
function makeProjects(response){
    if(!Array.isArray(response))
        response = response.values

    const isImportant = response.filter(r => ! blacklist.some(b => r.name.endsWith(b)))

    // starred projects go first, putting the most recently modified ones on top
    isImportant.sort((r0, r1) => new Date(r0.pushed_at) - new Date(r1.pushed_at))
            .sort((r0, r1) => r0.watchers - r1.watchers)
    
    // classify repos, assigning each to the appropriate topic list
    Object.keys(topics).forEach(topic => topics[topic].list = [])
    isImportant.forEach(repo => {
        const topic = findTopic(repo)
        topics[topic].list = [repo, ...topics[topic].list]
    })

    // create a card grid for each topic
    let projects = []
    for(const key in topics)
        if(topics[key].list.length)
            projects.push(
                Object({key: key,  
                        body: cardGrid(topics[key].list.map(repoToCard))}))
    
    return projects
}

// classify each project to the very first matching topic
function findTopic(repo){
    if(repo.fork)
        return "forks-contributions"
    else if(!repo.topics)
        return "other"

    for(let topic in topics)
        if(repo.topics.find(name => name.toLowerCase().includes(topic.toLowerCase())))
            return topic
    
    return "other"
}

export { makeProjects }
