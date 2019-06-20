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
        name: newName,
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

  nameChangedHandler = event => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 21
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
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;
