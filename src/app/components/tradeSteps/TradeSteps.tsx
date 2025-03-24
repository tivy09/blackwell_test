"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./TradeSteps.module.scss";
import StoreButtons from "@/app/widget/storeButtons/storeButtons";
import { useTranslation } from "react-i18next";

const TradeSteps = () => {
  const { t } = useTranslation();
  const stepTitles = t("tradeSteps.steps", { returnObjects: true }) as string[];

  const steps = stepTitles.map((title, index) => ({
    id: index + 1,
    title,
    image: `/assets/image/guide/guide-${index + 1}.png`
  }));

  const [selectedStep, setSelectedStep] = useState(steps[0]);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (leftPanelRef.current && rightPanelRef.current) {
      const maxHeight = Math.max(
        leftPanelRef.current.clientHeight,
        rightPanelRef.current.clientHeight
      );
      setPanelHeight(maxHeight);
    }
  }, [selectedStep]);

  return (
    <div className={styles.tradeContainer}>
      <h2 className={styles.title}>{t("tradeSteps.title")}</h2>

      <div className={styles.contentWrapper}>
        <div
          ref={leftPanelRef}
          className={styles.leftPanel}
          style={{ height: panelHeight }}
        >
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${styles.stepItem} ${
                selectedStep.id === step.id ? styles.active : ""
              }`}
              onClick={() => setSelectedStep(step)}
            >
              <span className={styles.stepNumber}>{step.id}</span>
              <span className={styles.stepText}>{step.title}</span>
            </div>
          ))}
        </div>

        <div
          ref={rightPanelRef}
          className={`${styles.rightPanel} ${styles.imageBorder}`}
          style={{ height: panelHeight }}
        >
          <Image
            src={selectedStep.image}
            alt={t("tradeSteps.imageAlt", { stepId: selectedStep.id })}
            width={280}
            height={350}
            className={styles.stepImage}
          />
        </div>
      </div>

      <StoreButtons />
    </div>
  );
};

export default TradeSteps;