import React from "react";

const MRFInReact = () => {
  const greeting = "Welcome to React JS....";
  const authorDetails = {
    naam: "Abishek",
    age: 21,
    hobby: "Coding",
    habbits: "Reading Book",
    love: "Mom and Brother",
  };
  const users = [{ name: "Abi" }, { name: "Abinash" }, { name: "Bhagawati" }];
  const workers = [
    { name: "Abishek", isDeveloper: true },
    { name: "Abinash", isDeveloper: false },
    { name: "Bhagawati", isDeveloper: true },
  ];
  return (
    <>
      <h1>{greeting}</h1>
      {/* <p>{authorDetails.name}</p> */}
      <h2>User Details:</h2>
      <ul>
        {users.map((user, key) => (
          <li>{user.name}</li>
        ))}
      </ul>
      <h1>Developer Workers</h1>
      {/* // filters */}
      <ul>
        <li>
          {workers
            .filter((worker) => worker.isDeveloper)
            .map((worker) => (
              <li>{worker.name}</li>
            ))}
        </li>
      </ul>
      {/* Ternery Operators.     */}
    </>
  );
};

export default MRFInReact;
