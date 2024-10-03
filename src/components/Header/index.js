import { Link } from "react-router-dom";
import './index.css'
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="link1">
      <h1 className="title">Virtual Book Library</h1></Link>
      <Link to="/library" className="link">My Library</Link>
    </div>
  );
};
export default Header;
