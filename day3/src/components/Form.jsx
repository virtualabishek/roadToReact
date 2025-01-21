import { useState } from "react";
import "../index.scss";

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
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="fname">Last Name*</label>
          <input type="text" id="lname" placeholder="Enter last name" />
          <label htmlFor="mail">Enter Email*</label>
          <input type="email" id="mail" placeholder="Enter Email" />
          <label htmlFor="phone">Contact</label>
          <input type="number" id="phone" placeholder="Enter phone number" />
          <label htmlFor="gender">Gender</label>
          <input type="radio" id="male" /> Male
          <input type="radio" id="female" /> Female
          <input type="radio" id="other" /> Other
          <label htmlFor="sub">Your Best Subject</label>
          <input type="checkbox" id="ai" /> AI
          <input type="checkbox" id="web" /> Web
          <input type="checkbox" id="graphics" /> Graphics
          <label htmlFor="resume">Upload Resume</label>
          <input type="file" id="resume" />
          <label htmlFor="link">Enter URL</label>
          <input type="url" id="link" placeholder="Enter url" />
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
