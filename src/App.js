import { VirtualLibraryProvider } from "./context/VirtualLibraryContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BookDetailsPage from "./components/BookDetails";
import Library from "./components/Library";
const App = () => {
  return (
    <VirtualLibraryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Router>
    </VirtualLibraryProvider>
  );
};
export default App;
