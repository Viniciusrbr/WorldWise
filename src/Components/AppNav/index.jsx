import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cidades</NavLink>
        </li>
        <li>
          <NavLink to="countries">Paises</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
