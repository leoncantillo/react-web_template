import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

function Navbar() {
  return (
    <div className="main-menu">
      <h1>Navigation</h1>
      <ul>
        <li><Link to="">Link 1</Link></li>
        <li><Link to="">Link 2</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;