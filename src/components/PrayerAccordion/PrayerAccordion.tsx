import { useId, useState, type CSSProperties } from "react";
import styles from "./PrayerAccordion.module.css";
import PrayerCard from "../PrayerCard/PrayerCard";
import { CaretUpIcon } from "@phosphor-icons/react";

const PRAYER_COUNT = 4;

const PrayerAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div
      className={
        isOpen ? `${styles.wrapper} ${styles.wrapperOpen}` : styles.wrapper
      }
      style={{ "--count": PRAYER_COUNT } as CSSProperties}
    >
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
              <span className={styles.subtitle}>{PRAYER_COUNT} prayers</span>
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
      {/* Kept mounted so the close animation can play; visibility: hidden
          (applied after the animation) removes it from focus and a11y tree */}
      <div
        id={contentId}
        className={
          isOpen ? `${styles.content} ${styles.contentOpen}` : styles.content
        }
      >
        <div className={styles.clip}>
          <div className={styles.cards}>
            {Array.from({ length: PRAYER_COUNT }, (_, index) => (
              <div
                key={index}
                className={styles.cardSlot}
                style={{ "--index": index } as CSSProperties}
              >
                <PrayerCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerAccordion;
