import { e, Spinner} from '../utils.js'
import { githubHeaders } from '../config.js'
import { hosts, alertMsg } from './config.js'
import { makeProjects } from './methods.js'
import { makeHosts, makeTopics } from './options.js'


class Work extends React.Component{
  constructor(){
    super()
    this.state = {alert: false, projects: false, topic: 0, host: 0}
    this.makeHosts = makeHosts.bind(this)
    this.makeTopics = makeTopics.bind(this)
  }

  componentDidMount(){
    // hide alert on click
    ReactDOM.findDOMNode(this).addEventListener('click', () => this.setState({alert: false}))
    this.callAPI(this.state.host)
  }

  callAPI(index){

    fetch(hosts[index].url, {headers: githubHeaders})
    .then(httpResponse => httpResponse.json())
      .then(data => this.updateProjects.bind(this)(data, index))
    .catch(error => {this.setState({ alert: true, projects: true }) ; console.error(error)})
  }

  switchHost(event){
    const index = event.target.dataset.index
    if(!hosts[index].projects)
      this.setState({projects: false, topic: 0}, _ => this.callAPI(index))
    else
      this.setState({projects: hosts[index].projects, host: index, topic: 0})
  }

  updateProjects(data, index){
    const projects = makeProjects(data)
    hosts[index].projects = projects
    this.setState({projects: projects, host: index})
  }

  render(){
    const { alert, projects, topic } = this.state, header = this.makeHosts()

    return (
      e("div", {id: "work"}, 
        header,
        ! projects ? 
          Spinner("dark") : 
          alert ?  
            e("div", {className: "alert alert-warning"}, alertMsg):
            topic < projects.length && 
              e("div", {id: "projects"}, projects.length > 1 && this.makeTopics(), projects[topic].body)))
  }
}

export default Work