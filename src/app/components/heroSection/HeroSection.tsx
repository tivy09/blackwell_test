"use client";

import Image from "next/image";
import styles from "./HeroSection.module.scss";
import StoreButtons from "@/app/widget/storeButtons/storeButtons";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/image/hand.png"
          alt={t("heroSection.storeAlt")}
          width={750}
          height={800}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h1 className={styles.heroTitle}>
            {t("heroSection.heroTitleMain")} <br />
            <span className={styles.heroTitleItalic}>
              {t("heroSection.heroTitleSub")}
            </span>
          </h1>

          <div className={styles.storeContainer}>
            <StoreButtons />
            <Image
              src="/assets/image/regular.png"
              alt={t("heroSection.storeAlt")}
              width={40}
              height={40}
              className={styles.storeLogo}
            />
          </div>
        </div>

        <div className={styles.section}>
          <p className={styles.subText}>{t("heroSection.subText")}</p>
          <p className={styles.highlight}>{t("heroSection.highlight")}</p>

          <div className={styles.tags}>
            <span className={`${styles.tagItem} ${styles.tagWhite}`}>
              {t("heroSection.tagForex")}
            </span>
            <span className={`${styles.tagItem} ${styles.tagOrange}`}>
              {t("heroSection.tagMetals")}
            </span>
            <span className={`${styles.tagItem} ${styles.tagRed}`}>
              {t("heroSection.tagOil")}
            </span>
            <span className={`${styles.tagItem} ${styles.tagLightBlue}`}>
              {t("heroSection.tagIndices")}
            </span>
          </div>

          <p className={styles.heroDescription}>
            {t("heroSection.heroDescription")}
          </p>

          <button className={styles.registerBtn} onClick={() => router.push("/register")}>
            {t("heroSection.registerNow")}
          </button>

          <p className={styles.disclaimer}>
            {t("heroSection.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;