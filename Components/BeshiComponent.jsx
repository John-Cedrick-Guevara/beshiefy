import React, { useState } from "react";

const BeshiComponent = () => {
  const [input, setInput] = useState("");
  const [output , setOutput] = useState('')

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const letters = input.split("");
    const arrays = [];

    // for (const letter of letters) {
    //   arrays.push(letter);
    // }


    const map = letters.map((letters) =>
      letters === " " ? "🤸‍♀️" : letters
    ); 
    setOutput(map)

    console.log(map)
  }


  return (
    <>
      <h1 className="title">beshiefy</h1>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            placeholder="Mag input kana beshie"
            type="text"
            onChange={handleChange}
          />
          <button>submit</button>
        </div>
        <h1 className="output">{output}</h1>
      </form>
    </>
  );
};

export default BeshiComponent;
