import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
      console.log("Submitted Name:", firstName, lastName);

    } else {
      setErrors(["First name is required!"]);
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))}
        </div>
      )}
      <h3>Submissions</h3>
      {listOfSubmissions}
      <div>
        <h3>Resources</h3>
        <p>
          For more information about React forms, you can visit the{" "}
          <a href="https://reactjs.org/docs/forms.html" target="_blank" rel="noopener noreferrer">
            React Forms documentation
          </a>.
        </p>
      </div>
    </div>
  );
}

export default Form;
