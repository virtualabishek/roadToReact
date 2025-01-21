import React, { useState } from "react";
import validator from "validator";

const Password = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validatePwd = (value) => {
    if (value.trim() === "") {
      setErrorMessage("");
      return;
    }

    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Strong Password");
    } else {
      setErrorMessage("Is Weak Password");
    }
  };

  return (
    <div>
      <h1>Checking Password Strength On React</h1>
      <label htmlFor="pwd">Enter Password: </label>
      <input type="password" onChange={(e) => validatePwd(e.target.value)} />
      {errorMessage !== "" && (
        <span
          style={{
            fontWeight: "bold",
            color: errorMessage === "Is Strong Password" ? "green" : "red",
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Password;
