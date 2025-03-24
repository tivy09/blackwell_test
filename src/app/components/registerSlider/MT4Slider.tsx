"use client";

import { useState, useEffect } from "react";
import styles from "./MT4Slider.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "@/app/widget/iosButton/button";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const MT4Slider = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const slidesText = t("mt4Slider.slides", { returnObjects: true }) as string[];

  const slidesData = slidesText.map((text, index) => ({
    image: `/assets/image/register/step-${index + 1}.png`,
    text
  }));

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesPerView = isMobile ? 1 : 3.5;
  const translateX = `translateX(-${currentIndex * (100 / slidesPerView)}%)`;

  const nextSlide = () => {
    if (currentIndex < slidesData.length - slidesPerView) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("mt4Slider.title")}</h2>
      <div className={styles.sliderContainer}>
        <button
          className={styles.arrow}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <i className={`bi bi-chevron-left ${styles.arrowIcon}`}></i>
        </button>

        <div className={styles.sliderWrapper}>
          <div className={styles.slidesTrack} style={{ transform: translateX }}>
            {slidesData.map((slide, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.imageContainer}>
                  <img
                    src={slide.image}
                    alt={slide.text}
                    className={styles.image}
                  />
                  <p className={styles.caption}>{slide.text}</p>
                  {index < slidesData.length - 1 && (
                    <div className={styles.arrowDivider}>
                      <img
                        src="/assets/icon/arrow.png"
                        alt="Arrow Divider"
                        className={styles.arrowIconImage}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.arrow}
          onClick={nextSlide}
          disabled={currentIndex >= slidesData.length - slidesPerView}
        >
          <i className={`bi bi-chevron-right ${styles.arrowIcon}`}></i>
        </button>
      </div>

      <Button
        name={t("mt4Slider.registerNow")}
        type="button"
        color="primary"
        onClick={() => router.push("/register")}
      />
    </div>
  );
};

export default MT4Slider;
