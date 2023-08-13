//JSX enables us to write HTML and JS code in JS file

import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [name, setName] = useState("Neil"); // Default name

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var myName = "Parishri";

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <h1>Hello {name}!</h1>

      <p>Created by {myName}</p>
      <p>Copyright {currentYear}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

//render means providing, render function takes in two arguments as what to output and where to output it
//for it to be able to identify that it is JS expression write in "{//js code}"
