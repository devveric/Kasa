import logo from '../img/logo.svg';
import '../css/Banner.css';

const Banner = () => {
  return (
    <header>
      <nav className="header-nav">
        <div className="header-nav_bloc-img">
          <img src={logo} alt="logo kasa" />
        </div>
        <ul className="header-nav_bloc-list">
          <li><a href="./public/index.html">Accueil</a></li>
          <li><a href='./public/index.html'>À propos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Banner;