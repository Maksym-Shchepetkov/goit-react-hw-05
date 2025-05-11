import s from './Navigation.module.css';

const Navigation = ({ children }) => {
  return <nav className={s.nav}>{children}</nav>;
};

export default Navigation;
