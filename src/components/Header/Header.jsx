import { useState } from "react";
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <Logo />
      <Nav>nav</Nav>
      <ShowMenu showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
      <Nav showMenu={showMenu}>{`nav-mobile ${
        showMenu ? "active" : undefined
      }`}</Nav>
    </header>
  );
}
function Logo() {
  return (
    <a href="/" className="logo">
      Christmas.
    </a>
  );
}

function Nav({ children, showMenu }) {
  return (
    <ul className={children}>
      <li>
        <a href="#">
          <i className="bi bi-house"></i>
        </a>
      </li>
      <li>
        <a href="#">Gifts</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  );
}
function ShowMenu({ showMenu, handleToggleMenu }) {
  return (
    <>
      {showMenu ? (
        <a href="#" className="menu" onClick={handleToggleMenu}>
          <i className="bi bi-x-lg"></i>
        </a>
      ) : (
        <a href="#" className="menu" onClick={handleToggleMenu}>
          <i className="bi bi-list"></i>
        </a>
      )}
    </>
  );
}

export default Header;
