import { useContext } from "react";
import VirtualLibraryContext from "../../context/VirtualLibraryContext";
import BookCard from '../BookCard'
import './index.css'
const BookList = () => {
  const { filteredBooks  } = useContext(VirtualLibraryContext);

  return (
    <div className="books-list-card">
      {filteredBooks.map((each) => (
        <BookCard key={each.id} book={each} />
      ))}
    </div>
  );
};
export default BookList;
