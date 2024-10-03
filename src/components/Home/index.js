import { Link } from "react-router-dom";
import BookList from "../BookList";
import SearchBar from "../SearchBar";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <BookList />
    </div>
  );
};
export default Home;
