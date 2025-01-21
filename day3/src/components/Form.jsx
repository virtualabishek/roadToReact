/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../styles/FormStyle.scss";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState({
    ai: true,
    web: false,
    graphics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length < 7) {
      console.log("The Size should be greater than 7.");
    }
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subject,
      resume,
      url,
      about
    );
  };

  const handleSubjectChange = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubject({
      ai: true,
      web: false,
      graphics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="mainDiv">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="fname">First Name*</label> <br />
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="fname">Last Name*</label>
          <input
            type="text"
            id="lname"
            value={lastName}
            placeholder="Enter last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="mail">Enter Email*</label>
          <input
            type="email"
            id="mail"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone">Contact</label>
          <input
            type="number"
            id="phone"
            placeholder="Enter phone number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label htmlFor="gender">Gender</label>
          <input
            type="radio"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
          <input
            type="radio"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
          <input
            type="radio"
            id="other"
            value="other"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Other
          <label htmlFor="sub">Your Best Subject</label>
          <input
            type="checkbox"
            id="ai"
            checked={subject.ai === true}
            onChange={(e) => handleSubjectChange("ai")}
          />{" "}
          AI
          <input
            type="checkbox"
            id="web"
            checked={subject.web === true}
            onChange={(e) => handleSubjectChange("web")}
          />{" "}
          Web
          <input
            type="checkbox"
            id="graphics"
            checked={subject.graphics === true}
            onChange={(e) => handleSubjectChange("graphics")}
          />{" "}
          Graphics
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
          />
          <label htmlFor="link">Enter URL</label>
          <input
            type="url"
            id="link"
            placeholder="Enter url"
            onChange={(e) => setUrl(e.target.value)}
          />
          <label htmlFor="choice">Select your choice</label>
          <select name="choice" id="ch">
            <option value="code">Coding</option>
            <option value="design">Designing</option>
            <option value="hack">Hacking</option>
          </select>
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            placeholder="About your self"
            cols="30"
            rows="10"
            onChange={(e) => e.target.value}
          ></textarea>
          <button type="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
