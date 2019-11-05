const userName = "KostasKoyias", api = "https://api.github.com", repos = "/users/" + userName + "/repos"
const grid = { rows: 12, cardsPerRow: 4}
const alertMsg = "!! Failed to load projects. Please check your connection & reload this page."

const topics = {
    api : (repo) => api + "/repos/" + userName + "/" + repo + "/topics",
    list: ["linux", "compiler-design", "web", "data-science", "forks-contributions"]
}

export { api, repos, topics, alertMsg, grid }