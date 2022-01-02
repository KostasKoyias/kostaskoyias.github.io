import { Spinner } from '../utils.js'
import { hosts, alertMsg } from './config.js'
import { makeProjects } from './methods.js'
import { makeHosts, makeTopics } from './options.js'


class Work extends React.Component {
  constructor() {
    super()
    this.state = { alert: false, projects: false, topic: 0, host: 0 }
    this.makeHosts = makeHosts.bind(this)
    this.makeTopics = makeTopics.bind(this)
  }

  componentDidMount() {
    // hide alert on click
    ReactDOM.findDOMNode(this).addEventListener('click', () => this.setState({ alert: false }))
    this.callAPI(this.state.host)
  }

  callAPI(index) {
    const { url, headers } = hosts[index]

    fetch(url, { headers })
      .then(httpResponse => httpResponse.json())
      .then(data => this.updateProjects.bind(this)(data, index))
      .catch(error => { this.setState({ alert: true, projects: true }); console.error(error) })
  }

  switchHost(event) {
    const index = event.target.dataset.index
    if (!hosts[index].projects)
      this.setState({ projects: false, topic: 0 }, _ => this.callAPI(index))
    else
      this.setState({ projects: hosts[index].projects, host: index, topic: 0 })
  }

  updateProjects(data, index) {
    const projects = makeProjects(data)
    hosts[index].projects = projects
    this.setState({ projects: projects, host: index })
  }

  render() {
    const { alert, projects, topic } = this.state, header = this.makeHosts()

    return (
      <div id="work">
        {header}
        {!projects ?
          Spinner("dark") :
          alert ?
            <div className="alert alert-warning">{alertMsg}</div>
            :
            topic < projects.length &&
            <div id="projects">
              {projects.length > 1 && this.makeTopics()}
              {projects[topic].body}
            </div>
        }
      </div>)
  }
}

export default Work