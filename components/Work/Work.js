import { e, Spinner} from '../utils.js'
import { api, repos, alertMsg } from './config.js'
import { makeProjects, makeTopics } from './methods.js'

class Work extends React.Component{
  constructor(){
    super()
    this.state = {alert: false, projects: false, topic: 0}
    this.makeTopics = makeTopics.bind(this)
  }

  // retrieve meta-data for each Github project
  componentDidMount(){
    // hide alert on click
    ReactDOM.findDOMNode(this).addEventListener('click', () => this.setState({alert: false}))

    fetch(api + repos, {headers: {'Accept' : 'application/vnd.github.mercy-preview+json'}})
    .then(httpResponse => httpResponse.json())
      .then(data => this.setState({
        projects: makeProjects(data)
      }))
    .catch(error => {this.setState({ alert: true, projects: true }) ; console.error(error)})
  }

  render(){
    const { alert, projects, topic } = this.state

    return (
      e("div", {id: "work"}, 
        e("h1", {className: "display-4"}, "Projects on Github"),
          ! projects ? 
            Spinner("dark") : 
            alert ?  
              e("div", {className: "alert alert-warning"}, alertMsg):
              topic < projects.length && 
                e("div", {id: "projects"}, this.makeTopics(), projects[topic].body)))
  }

}

export default Work