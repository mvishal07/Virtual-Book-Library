import React, { useContext } from "react";

import VirtualLibraryContext from "../../context/VirtualLibraryContext";
import Header from "../Header";

import './index.css'

const Library = () => {
  const { myLibrary, removeFromLibrary } = useContext(VirtualLibraryContext);

  return (
    <>
    <Header/>
    <div className="library-card">
      <h1>My Library</h1>
      {myLibrary.length === 0 ? (
        <p>No books added to your library.</p>
      ) : (
        <ul className="list">
          {myLibrary.map((book) => (
            <li key={book.id} className="each-book">
              {book.title} - {book.author}
              <button onClick={() => removeFromLibrary(book.id)} className="remove-btn">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default Library;
