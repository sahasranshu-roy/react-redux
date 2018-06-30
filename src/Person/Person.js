//import React, { Component } from 'react';
import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Hi My name is {props.name} and i am {props.age} year old
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

// class person extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Hi My name is {this.props.name} and i am {this.props.age} year old</p>
//                 <p>{this.props.children}</p>
//             </div>
//         );
//       }
// }

export default person;
