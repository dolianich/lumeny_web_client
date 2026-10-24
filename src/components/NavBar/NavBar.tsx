import styles from "./NavBar.module.css";
import NavButton from "../NavButton/NavButton";
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
  return (
    <nav className={styles.navigation}>
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
