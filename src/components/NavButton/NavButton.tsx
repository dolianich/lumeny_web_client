import styles from "./NavButton.module.css";
import { NavLink } from "react-router-dom";
import type { Icon } from "@phosphor-icons/react";

interface Props {
  link: string;
  icon: Icon;
  label: string;
}

// NavLink passes isActive (current route matches `link`) to both className
// and children, so the selected state needs no extra props or route checks
const NavButton = ({ link, icon: Icon, label }: Props) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `${styles.navButton} ${isActive ? styles.selected : styles.default}`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            size={24}
            weight={isActive ? "fill" : "regular"}
            className={isActive ? styles.iconSelected : undefined}
          />
          <span>{label}</span>
        </>
      )}
    </NavLink>
  );
};

export default NavButton;
