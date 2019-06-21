import React, { Component } from "react";
import "./App.css";

import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import userInput from "./components/UserInput";

class App extends Component {
  state = {
    username: "Supermax"
  };

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div>
        <UserInput changed={this.usernameChangedHandler} />
        <UserOutput userName="Raffay" />
        <UserOutput userName="Zain" />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}

export default App;
