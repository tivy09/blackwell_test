'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import AuthModal from "../authModal/AuthModal";
import LoginForm from "../loginForm/LoginForm";
import RegisterForm from "../RegisterForm";
import { useUserStore } from "@/store/user";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import Link from "next/link";

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 27);

const Header = () => {
  const { t } = useTranslation("common");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"login" | "register" | null>(null);

  const { user, logout } = useUserStore();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const handleDropdownClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleOpenModal = (type: "login" | "register") => {
    setModalType(type);
    setShowModal(true);
    setShowDropdown(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/assets/image/logo.png"
            alt="Blackwell Global"
            width={120}
            height={100}
          />
          <span className={styles.logoText}>{t("brandName")}</span>
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}
            style={{ fontSize: 24 }}
          ></i>
        </div>

        <div
          className={`${styles.countdownContainer} ${menuOpen ? styles.show : ""
            }`}
        >
          <span className={styles.countdownText}>{t("promotionEnds")}</span>
          <div className={styles.countdown}>
            <div className={styles.timer}>
              <span>{timeLeft.days}</span>:<span>{timeLeft.hours}</span>:
              <span>{timeLeft.minutes}</span>:<span>{timeLeft.seconds}</span>
            </div>
            <div className={styles.labels}>
              <span>{t("days")}</span>
              <span>{t("hours")}</span>
              <span>{t("minutes")}</span>
              <span>{t("seconds")}</span>
            </div>
          </div>
        </div>

        <div className={`${styles.right} ${menuOpen ? styles.show : ""}`}>
          {user == null ? (
            <>
              {/* <button
                className={styles.registerBtn}
                onClick={() => handleOpenModal("register")}
              >
                {t("registerNow")}
              </button> */}
              <Link href="/register" className={styles.registerBtn}>
                {t("registerNow")}
              </Link>
              <LanguageSwitcher />

              <div className={styles.profileWrapper}>
                <i
                  className={`bi bi-person-circle ${styles.userIcon}`}
                  style={{ fontSize: 30, cursor: "pointer" }}
                  onClick={handleDropdownClick}
                ></i>
                {showDropdown && (
                  <div className={styles.dropdown}>
                    <button onClick={() => handleOpenModal("login")}>
                      {t("login")}
                    </button>
                    {/* <button onClick={() => handleOpenModal("register")}>
                      {t("register")}
                    </button> */}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <button className={styles.registerBtn} onClick={handleLogout}>
                {t("logout")}
              </button>

              <LanguageSwitcher />

              <div className={styles.profileWrapper}>
                <i
                  className={`bi bi-person-circle ${styles.userIcon}`}
                  style={{ fontSize: 30, cursor: "pointer" }}
                  onClick={handleDropdownClick}
                ></i>
              </div>
            </>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={
          modalType === "login" ? t("loginTitle") : t("registerTitle")
        }
      >
        {modalType === "login" ? (
          <LoginForm onClose={() => setShowModal(false)} />
        ) : (
          <RegisterForm />
        )}
      </AuthModal>
    </>
  );
};

export default Header;
