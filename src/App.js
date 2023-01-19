import React, { useState } from "react";
import "../src/style/App.css";
import Welcome from "./components/Welcome";

function App() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState(false);
  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <button
          type="submit"
          onClick={() => {
            setLogin(!login);
          }}
        >
          Login
        </button>
      </div>
      {login && name && <Welcome name={name}></Welcome>}
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4>
          <i>Assignment done by Ankit Sharma, 12016468</i>
        </h4>
      </div>
    </div>
  );
}

export default App;
