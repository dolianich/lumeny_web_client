import styles from "./PrayerCard.module.css";
import { ClockIcon } from "@phosphor-icons/react";

const PrayerCard = () => {
  return (
    <div className={styles.prayerCard}>
      <div className={styles.topSection}>
        <p className={styles.prayerTitle}>Prayer title</p>
        <p className={styles.prayerDescription}>
          Prayer description text goes here
        </p>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.duration}>
          <ClockIcon size={18} weight="regular" />
          <p className={styles.time}>2 min</p>
        </div>
        <button type="button" className={styles.prayButton}>
          Pray
        </button>
      </div>
    </div>
  );
};

export default PrayerCard;
