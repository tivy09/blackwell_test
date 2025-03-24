"use client";

import React from "react";
import styles from "./WhyChooseUs.module.scss";
import Button from "@/app/widget/iosButton/button";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const benefits = t("whyChooseUs.benefits", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t("whyChooseUs.title")}</h2>
      <div className={styles.list}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.card}>
            <img
              src={`/assets/icon/choose/icon-${index + 1}.png`}
              alt={benefit.title}
              className={styles.icon}
            />
            <div className={styles.content}>
              <h3 className={styles.heading}>{benefit.title}</h3>
              <p className={styles.description}>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        name={t("whyChooseUs.registerNow")}
        type="button"
        color="primary"
        onClick={() => router.push("/register")}
      />
    </section>
  );
};

export default WhyChooseUs;
