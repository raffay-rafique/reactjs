import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Raffay Rafique",
        age: 28
      },
      {
        name: "Zain Rafique",
        age: 26
      }
    ]
  };
  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: "Raffay Rafique",
          age: 23
        }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person name="Raffay" age="25" />
        <Person name="Zain" age="26">
          My Hobbies: Cricket
        </Person>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;
