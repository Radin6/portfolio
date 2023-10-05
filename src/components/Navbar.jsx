import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
