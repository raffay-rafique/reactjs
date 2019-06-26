import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import userInput from "./components/UserInput";

class App extends Component {
  state = {
    username: "Supermax",
    showPersons: false,
    person: [
      {
        name: "Raffay",
        age: 28
      },
      { name: "Zain", age: 30 },
      { name: "Dusty", age: 20 }
    ]
  };

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHandler = personIndex => {
    const person = this.state.person;
    person.splice(personIndex, 1);
    this.setState({ person: person });
  };
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
          <UserInput changed={this.usernameChangedHandler} />
          <UserOutput userName="Raffay" />
          <UserOutput userName="Zain" />
          <UserOutput userName={this.state.username} />
        </div>
      );
    }
    return (
      <React.Fragment>
        <div>
          <button onClick={this.togglePersonsHandler}>Click</button>
          {persons}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
