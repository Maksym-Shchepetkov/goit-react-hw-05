import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={s.container}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
