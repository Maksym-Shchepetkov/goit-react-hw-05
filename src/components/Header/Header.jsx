import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={s.container}>
        <Navigation>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            Movies
          </NavLink>
        </Navigation>
      </div>
    </header>
  );
};

export default Header;
