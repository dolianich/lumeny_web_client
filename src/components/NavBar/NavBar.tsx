import styles from "./NavBar.module.css";
import NavButton from "../NavButton/NavButton";
import type { CSSProperties } from "react";
import { matchPath, useLocation } from "react-router-dom";
import {
  CrossIcon,
  BookOpenTextIcon,
  HandsPrayingIcon,
  GearIcon,
} from "@phosphor-icons/react";

const navButtons = [
  { id: 1, icon: CrossIcon, link: "/home", label: "Home" },
  { id: 2, icon: BookOpenTextIcon, link: "/bible", label: "Bible" },
  { id: 3, icon: HandsPrayingIcon, link: "/prayers", label: "Prayers" },
  { id: 4, icon: GearIcon, link: "/settings", label: "Settings" },
];

const NavBar = () => {
  const { pathname } = useLocation();
  // Same matching rule NavLink uses for isActive (child routes count too)
  const activeIndex = navButtons.findIndex((button) =>
    matchPath({ path: button.link, end: false }, pathname),
  );

  return (
    <nav
      className={styles.navigation}
      style={
        {
          "--count": navButtons.length,
          "--active-index": Math.max(activeIndex, 0),
        } as CSSProperties
      }
    >
      {/* One shared highlight that slides behind the active button */}
      <span
        className={
          activeIndex === -1
            ? styles.indicator
            : `${styles.indicator} ${styles.indicatorVisible}`
        }
        aria-hidden="true"
      />
      {navButtons.map((button) => (
        <NavButton
          key={button.id}
          link={button.link}
          icon={button.icon}
          label={button.label}
        />
      ))}
    </nav>
  );
};

export default NavBar;
