import { useId, useState, type CSSProperties } from "react";
import styles from "./PrayerAccordion.module.css";
import PrayerCard from "../PrayerCard/PrayerCard";
import { CaretUpIcon } from "@phosphor-icons/react";

const PRAYER_COUNT = 4;

const PrayerAccordion = () => {
  // Each toggle adds another half turn so the caret always rotates the same
  // direction, instead of swinging back and forth between 0deg and 180deg
  const [toggleCount, setToggleCount] = useState(0);
  const isOpen = toggleCount % 2 === 1;
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
          onClick={() => setToggleCount((count) => count + 1)}
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
            className={styles.caret}
            style={{ transform: `rotate(${180 + toggleCount * 180}deg)` }}
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
