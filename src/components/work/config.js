import { githubUser, githubHeaders } from '../config'
import { faGithub, faBitbucket, faLinux} from "@fortawesome/free-brands-svg-icons";

const hosts = [
    {
        name: "github",
        url: githubUser + "/repos",
        headers: githubHeaders,
        icon: faGithub
    },
    {
        name: "bitbucket",
        url: "https://api.bitbucket.org/2.0/repositories/%7Bace2a2f8-ac28-4d09-b008-660141a872a0%7D",
        headers: {},
        icon: faBitbucket
    }
]
const grid = { rows: 12, cardsPerRow: 4 }
const alertMsg = "!! Failed to load projects. Please check your connection & reload this page."
const blacklist = ["api", "ui"]

const topics = {
    "linux": { icon: faLinux}, "compiler-design": {},
    "web": {}, "data-science": {},
    "forks-contributions": {}, "other": {}
}

export { hosts, topics, alertMsg, grid, blacklist }