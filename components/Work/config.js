const userName = "KostasKoyias", api = "https://api.github.com", repos = "/users/" + userName + "/repos"
const grid = { rows: 12, cardsPerRow: 4}
const alertMsg = "!! Failed to load projects. Please check your connection & reload this page."

const topics = {
    api : (repo) => api + "/repos/" + userName + "/" + repo + "/topics",
    map: {
           "linux": {icon: "fab fa-linux"},  "compiler-design": {},//{icon: "fab fa-xl fa-d-and-d"},
           "web": {}/*{icon: "fas fa-code"}*/,  "data-science": {},//{icon: "fas fa-database"}, 
           "forks-contributions": {}/*{icon: "fas fa-share-alt"}*/, "other" : {}
        }
}

export { api, repos, topics, alertMsg, grid }