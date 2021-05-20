import './styles/BurgerMenu.css';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const closeBurgerMenu = () => {
    const burger = document.getElementById('burger');
    const burgerMenu = document.getElementById('burgerMenuContainer');
    const spacer = document.getElementById('spacer');
    const navBar = document.getElementById('navBar');
    burger.className = 'burgerClose';
    burgerMenu.className = 'burgerMenuClose';
    spacer.className = 'spacerOff';
    navBar.className = '';
  };

  window.onresize = () => {
    if (window.innerWidth > 600) {
      closeBurgerMenu();
    }
  };

  return (
    <div id="burgerMenuContainer" className="burgerMenuClose">
      <div id="burgerMenuColumn" className="flexColumn">
        <div id="burgerMenuItemBox" className="flexColumn">
          <Link
            className="burgerMenuItem"
            to="/about"
            onClick={closeBurgerMenu}
          >
            About
          </Link>
          <Link className="burgerMenuItem" to="/blog" onClick={closeBurgerMenu}>
            Blog
          </Link>
          <Link
            className="burgerMenuItem"
            to="/playlist"
            onClick={closeBurgerMenu}
          >
            Playlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
