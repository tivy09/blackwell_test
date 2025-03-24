"use client";

import React from "react";
import styles from "./FastMaching.module.scss";
import { useTranslation } from "react-i18next";

const FastMatching = () => {
  const { t } = useTranslation();

  const listItems = [
    t("fastMatching.spotlight"),
    t("fastMatching.topStrategies"),
    t("fastMatching.lowDrawdown"),
    t("fastMatching.mediumDrawdown"),
    t("fastMatching.highDrawdown"),
    t("fastMatching.newStrategies"),
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t("fastMatching.title")}</h2>
      <p className={styles.description}>{t("fastMatching.description")}</p>
      <div className={styles.container}>
        <div className={styles.videoSection}>
          <video
            src="/assets/video/mobile-video.mov"
            className={styles.video}
            width={300}
            height={600}
            autoPlay
            muted
            loop
            controls
            playsInline
          />
        </div>
        <div className={styles.textSection}>
          <ul className={styles.list}>
            {listItems.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <img
                  src="/assets/image/list-icon.png"
                  alt="icon"
                  className={styles.icon}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FastMatching;
