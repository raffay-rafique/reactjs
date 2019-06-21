import React from "react";
import "./Person.css";
const person = props => {
  return (
    <div className="Person">
      <p>
        I'm a Person named {props.name} and {props.age} years old!
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
