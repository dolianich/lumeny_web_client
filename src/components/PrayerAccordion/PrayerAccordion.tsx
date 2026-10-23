import { useId, useState } from "react";
import styles from "./PrayerAccordion.module.css";
import PrayerCard from "../PrayerCard/PrayerCard";
import { CaretUpIcon } from "@phosphor-icons/react";

const PrayerAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        <button
          type="button"
          className={styles.accordion}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={styles.innerContent}>
            <span className={styles.image}></span>
            <span className={styles.textContent}>
              <span className={styles.title}>For everyday</span>
              <span className={styles.subtitle}>4 prayers</span>
            </span>
          </span>
          <CaretUpIcon
            size={24}
            weight="regular"
            className={
              isOpen ? styles.caret : `${styles.caret} ${styles.caretCollapsed}`
            }
          />
        </button>
      </h2>
      <div id={contentId} className={styles.content} hidden={!isOpen}>
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
      </div>
    </div>
  );
};

export default PrayerAccordion;
