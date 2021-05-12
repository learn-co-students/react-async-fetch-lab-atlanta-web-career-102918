// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    peopleInSpace: []
  }

  render() {
    return (
      <div>
       <h4>People in space:</h4>
        {this.state.peopleInSpace.map(person => <div>{person.name}</div>)}
      </div>
    );
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

}
