import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  setBooks: React.Dispatch<React.SetStateAction<Props["books"]>>
  books: Props["books"]
}

const AddToList: React.FC<IProps> = ({ books, setBooks }) => {
  const [input, setInput] = useState({
    name: "",
    img: "",
    author: "",
    year: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = ()=> {
    if (!input.name || !input.author || !input.img || !input.year) {
      return;
    }
    setBooks([
      ...books,
      {
        name: input.name,
        img: input.img,
        author: input.author,
        year: parseInt(input.year),
      },
    ]);

    setInput({
      name: "",
      img: "",
      author: "",
      year: "",
    });
  };
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Image"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <input
        type="text"
        placeholder="Author"
        className="AddToList-input"
        value={input.author}
        onChange={handleChange}
        name="author"
      />
      <input
        type="number"
        placeholder="Published Year"
        className="AddToList-input"
        value={input.year}
        onChange={handleChange}
        name="year"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To list
      </button>
    </div>
  );
};

export default AddToList;
