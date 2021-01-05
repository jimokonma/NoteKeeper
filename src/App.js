import React, { useState } from "react";
import KeeperItem from "./components/KeeperItem";

function App() {
  // Input filed state
  const [inputText, setInputText] = useState({
    title: "",
    text: "",
  });
  // Save notes states
  const [keep, setKeep] = useState([]);
  // Save input filed to state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputText((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  // add new notes to note-board
  const handleClick = () => {
    setKeep((prevVal) => {
      return [...prevVal, inputText];
    });
    setInputText({
      title: "",
      text: "",
    });
  };
  // Delete Notes
  const handleDel = (id) => {
    setKeep((prevKeep) => {
      return prevKeep.filter((k, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <nav>Sitcky Nots</nav>
      <div className="holder">
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={inputText.title}
        />
        <textarea
          name="text"
          onChange={handleChange}
          value={inputText.text}
        ></textarea>
        <button type="submit" onClick={handleClick}>
          +
        </button>
      </div>
      {keep.map((keepItem, index) => {
        return (
          <KeeperItem
            key={index}
            id={index}
            title={keepItem.title}
            text={keepItem.text}
            del={handleDel}
          />
        );
      })}
    </div>
  );
}

export default App;
