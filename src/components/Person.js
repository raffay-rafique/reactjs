import React from "react";
const person = props => {
  return (
    <div>
      <p>
        I'm a Person named {props.name} and {props.age} years old!
      </p>
      <input type="text" onChange={}></input>
    </div>
  );
};

export default person;
