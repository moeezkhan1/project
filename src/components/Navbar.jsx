import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Airbnb</div>
    <ul className="nav-links">
      <li>Home</li>
      <li>Experiences</li>
      <li>Online Experiences</li>
    </ul>
    <div className="user-menu">
      <button>Login</button>
      <button>Signup</button>
    </div>
  </nav>
);

export default Navbar;
