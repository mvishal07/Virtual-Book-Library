import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import VirtualLibraryContext from '../../context/VirtualLibraryContext';
import Header from '../Header'
import './index.css'
const BookDetailsPage = () => {
  const { id } = useParams();
  const { books, addToLibrary } = useContext(VirtualLibraryContext);
  
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) return <h2>Book not found!</h2>;

  return (
    <>
    <Header/>
    <div className='book-details-card'>
      <h2 className='booktitle' >{book.title}</h2>
      <p className='desc'>{book.description}</p>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <p>Publication Year: {book.publication_year}</p>
      <button onClick={() => addToLibrary(book)} className='add-btn'>Add to My Library</button>
    </div>
    </>
  );
};

export default BookDetailsPage;
