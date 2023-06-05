
import { NavLink} from "react-router-dom";
import s from './Header.module.scss'
function Header() {
  return (
    <header className={s.headerContainer}>
        <nav  className={s.nav}>
          <NavLink to="/" className={s.nav__link}>Home</NavLink>
          <NavLink to="/tweets" className={s.nav__link}>Tweets</NavLink>
        </nav>
    </header>
  );
}

export default Header;
