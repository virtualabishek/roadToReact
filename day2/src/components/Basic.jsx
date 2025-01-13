import React from "react";

function getTitle(title) {
  return title;
}

const Basic = () => {
  //All JS Here
  const title = "React....";
  const welcome = {
    greeting: "Hello",
    title: "React",
  };
  return (
    <div>
      <h1>Hello {title}</h1>
      <h3>
        {welcome.greeting} {welcome.title}
      </h3>
      <p>{getTitle("React")}</p>
    </div>
  );
};

export default Basic;
