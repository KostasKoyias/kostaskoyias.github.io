import { githubUser } from '../config.js'

const hosts = [
    {
        url: githubUser + "/repos",
        icon: "fab fa-github"
    },
    {
        url: "https://api.bitbucket.org/2.0/repositories/%7Bace2a2f8-ac28-4d09-b008-660141a872a0%7D",
        icon: "fab fa-bitbucket"
    }
]
const grid = { rows: 12, cardsPerRow: 4 }
const alertMsg = "!! Failed to load projects. Please check your connection & reload this page."
const blacklist = ["api", "ui"]

const topics = {
    "linux": { icon: "fab fa-linux" }, "compiler-design": {},//{icon: "fab fa-xl fa-d-and-d"},
    "web": {}/*{icon: "fas fa-code"}*/, "data-science": {},//{icon: "fas fa-database"}, 
    "forks-contributions": {}/*{icon: "fas fa-share-alt"}*/, "other": {}
}

export { hosts, topics, alertMsg, grid, blacklist }