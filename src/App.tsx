import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  books: {
    name: string;
    img: string;
    author: string;
    year: number;
  }[];
}
function App() {
  const [books, setBooks] = useState<IState["books"]>([
    {
      name: "Eloquent Javascript",
      img: "https://eloquentjavascript.net/img/cover.jpg",
      author: "Marijn Haverbeke",
      year: 2018
    },
    {
    name: "The second sex",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0994/9780099499381.jpg",
    author: "Simone de Beauvoir",
    year: 1949
  },
  {
    name: "Naked Lunch",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b8/NakedLunch1stedition.jpg",
    author: "William S. Burroughs",
    year: 1959
  },
  ]);

  return (
    <div className="App">
      <h1>Books I want to read</h1>
      <List books={books} />
      <AddToList books = {books} setBooks = {setBooks}/>
    </div>
  );
}

export default App;
