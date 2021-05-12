import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const toBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const toggleBurger = () => {
    const burger = document.getElementById('burger');
    const burgerMenu = document.getElementById('burgerMenuContainer');
    const spacer = document.getElementById('spacer');
    const navBar = document.getElementById('navBar');
    if (burger.className === 'burgerClose') {
      burger.className = 'burgerOpen';
      burgerMenu.className = 'burgerMenuOpen';
      spacer.className = 'spacerOn';
      navBar.className = 'navBarFixed';
    } else {
      burger.className = 'burgerClose';
      burgerMenu.className = 'burgerMenuClose';
      spacer.className = 'spacerOff';
      navBar.className = '';
    }
  };

  return (
    <div id="navBar" className="">
      <Link to="/">
        <p id="danaKenney">Dana Kenney</p>
      </Link>
      <div id="navMiddle">
        <Link className="navMiddleItem" to="/about">
          About
        </Link>
        <Link className="navMiddleItem" to="/blog">
          Blog
        </Link>
        <Link className="navMiddleItem" to="/playlist">
          Playlist
        </Link>
      </div>
      <button id="contactButton" onClick={toBottom}>
        Contact Me
      </button>
      <div id="burgerContainer" onClick={toggleBurger} className="flexColumn">
        <div id="burger" className="burgerClose"></div>
      </div>
    </div>
  );
};

export default NavBar;
