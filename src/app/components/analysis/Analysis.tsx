"use client";

import Image from "next/image";
import styles from "./Analysis.module.scss";
import { useTranslation } from "react-i18next";

const Analysis = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.analysisSection}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{t("analysis.title")}</h2>
        <p className={styles.description}>{t("analysis.description")}</p>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.mainImageContainer}>
          <Image
            src="/assets/image/analysis/mobile-2.png"
            alt={t("analysis.altMainImage")}
            width={320}
            height={500}
            className={styles.mainImage}
          />

          <Image
            src="/assets/image/analysis/function-1.png"
            alt={t("analysis.altBox1")}
            width={120}
            height={80}
            className={`${styles.floatingBox} ${styles.box1}`}
          />
          <Image
            src="/assets/image/analysis/function-2.png"
            alt={t("analysis.altBox2")}
            width={120}
            height={80}
            className={`${styles.floatingBox} ${styles.box2}`}
          />
          <Image
            src="/assets/image/analysis/function-3.png"
            alt={t("analysis.altBox3")}
            width={120}
            height={80}
            className={`${styles.floatingBox} ${styles.box3}`}
          />
          <Image
            src="/assets/image/analysis/function-4.png"
            alt={t("analysis.altBox4")}
            width={120}
            height={80}
            className={`${styles.floatingBox} ${styles.box4}`}
          />
          <Image
            src="/assets/image/analysis/function-5.png"
            alt={t("analysis.altBox5")}
            width={120}
            height={80}
            className={`${styles.floatingBox} ${styles.box5}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Analysis;
