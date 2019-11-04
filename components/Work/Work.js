import { e, Spinner} from '../utils.js'
import { api, alertMsg } from './config.js'
import { processResponse } from './methods.js'

class Work extends React.Component{
  constructor(){
    super()
    this.state = {alert: false, loading: true}
  }

  // retrieve meta-data for each Github project
  componentDidMount(){
    // hide alert on click
    ReactDOM.findDOMNode(this).addEventListener('click', () => this.setState({alert: false}))

    fetch(api)
    .then(httpResponse => httpResponse.json())
      .then(data => this.setState({
        loading: false, 
        projects: processResponse(data)
      }))
    .catch(error => {this.setState({ alert: true, loading: false }) ; console.error(error)})
  }

  render(){
    const { alert, loading, projects } = this.state
    const body = loading ? Spinner("dark") : projects

    return (
      e("div", {id: "work"}, 
        e("h1", {className: "display-4"}, "Projects on Github"),
          body,
          alert &&  e("div", {className: "alert alert-warning"}, alertMsg) 
      ))
  }

}

export default Work