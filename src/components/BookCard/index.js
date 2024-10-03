import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
const BookCard = ({ book }) => (
  <div className="book-card">
    <div className='left-card'>
    <h3 className='book-title'>{book.title}</h3>
    </div>
    <div className='right-card'>
    <p className='author'>Author: {book.author}</p>
    <p className='gen'>Genre: {book.genre}</p>
    <p className='rating'>Rating: {book.rating}</p>
  
    <Link to={`/books/${book.id}`}>
    <button className='view-btn'>View Details</button>
   </Link>
   </div>
  </div>
);

export default BookCard;