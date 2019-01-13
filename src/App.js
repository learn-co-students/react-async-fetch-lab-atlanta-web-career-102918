// create your App component here
import React, {Component} from 'react'

export default class App extends Component {

  state = {
    people: []
  }

  componentDidMount(){
      fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(json => this.setState({
        people: json.people
      }))
  }

  render() {
    const spacePeople = this.state.people
    const peopleList = spacePeople.map((person) => <li>{person.name}</li>)

    return(
      <ul>
      {peopleList}
      </ul>
    )
  }
}
