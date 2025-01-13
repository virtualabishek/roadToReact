import React, { Component } from "react";

class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + " " + this.lastName;
  }
}

class FullStackDeveloper extends Developer {
  getJob() {
    return "MERN Stack Developer";
  }
}

const me = new FullStackDeveloper("Abshek", "Neupane");

console.log(me.getName());
console.log(me.getJob());

class Banker {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + " " + this.lastName;
  }
}

class ExperienceManager extends Banker {
  getJob() {
    return "Establishing Relationship";
  }
}

const myBrother = new ExperienceManager("Abinash", "Neupane");

console.log(myBrother.getName());
console.log(myBrother.getJob());
