"use client";

import Image from "next/image";
import styles from "./StoreButtons.module.scss";

const StoreButtons = () => {
  return (
    <div className={styles.storeButtons}>
      {/* Google Play Store */}
      <a
        href="https://play.google.com/store/apps/details?id=com.BlackwellGlobalInvestmentsUKLimited.pelican"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.storeButton}
      >
        <Image
          src="/assets/image/google-play.jpg"
          alt="Google Play"
          width={150}
          height={50}
        />
      </a>

      {/* Apple App Store */}
      <a
        href="https://apps.apple.com/my/app/blackwell-invest/id1666036351"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.storeButton}
      >
        <Image
          src="/assets/image/app-store.jpg"
          alt="App Store"
          width={150}
          height={50}
        />
      </a>
    </div>
  );
};

export default StoreButtons;
