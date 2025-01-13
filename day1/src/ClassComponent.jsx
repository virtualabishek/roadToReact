// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

class ClassComponent extends Component {
  planAboutMe() {
    return "I will learn react on detail before diving to frontend.";
  }
  render() {
    return (
      <div>
        <h1>Hello I am using Class for first time on a react.</h1>
        <p>{this.planAboutMe()}</p>
      </div>
    );
  }
}

export default ClassComponent;
