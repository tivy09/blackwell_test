"use client";

import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import StoreButtons from "@/app/widget/storeButtons/storeButtons";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  const items = t("navigation.items", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  const navigationItems = items.map((item, index) => ({
    id: `${index + 1}`,
    title: item.title,
    description: item.description,
    image: `/assets/image/${item.title.toLowerCase()}.png`,
    icon: `/assets/image/navigate/icon${index + 1}.png`,
    iconBlue: `/assets/image/navigate/icon${index + 1}-blue.png`,
    reasonImage: `/assets/image/reason/reason-${index + 1}.png`
  }));

  const [selectedTab, setSelectedTab] = useState(navigationItems[1]);

  return (
    <div className={styles.navigationContainer}>
      <h2 className={styles.title}>{t("navigation.title")}</h2>

      <div className={styles.tabContainer}>
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.tab} ${selectedTab.id === item.id ? styles.activeTab : ""}`}
            onClick={() => setSelectedTab(item)}
          >
            <Image 
              src={selectedTab.id === item.id ? item.iconBlue : item.icon} 
              alt={item.title} 
              width={24} 
              height={24} 
            />
          </button>
        ))}
      </div>

      <div className={styles.card}>
        <div className={styles.contentLayout}>
          <div className={styles.content}>
            <h3 className={styles.activityTitle}>{selectedTab.title}</h3>
            <p className={styles.description}>{selectedTab.description}</p>
          </div>

          <div className={styles.reasonImageContainer}>
            <Image 
              src={selectedTab.reasonImage} 
              alt={`Reason for ${selectedTab.title}`} 
              width={400} 
              height={300} 
            />
          </div>
        </div>
      </div>

      <StoreButtons />
    </div>
  );
};

export default Navigation;
