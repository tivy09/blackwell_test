"use client";

import { useState } from "react";
import styles from "./EnquiryForm.module.scss";
import { useTranslation } from "react-i18next";

type EnquiryFormData = {
  name: string;
  email: string;
  mobile: string;
  country: string;
  message: string;
}

const EnquiryForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    email: "",
    mobile: "",
    country: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className={styles.registerFormWrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("enquiryForm.title")}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputRow}>
            <input
              type="text"
              name="name"
              placeholder={t("enquiryForm.namePlaceholder")}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("enquiryForm.emailPlaceholder")}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputRow}>
            <input
              type="text"
              name="mobile"
              placeholder={t("enquiryForm.mobilePlaceholder")}
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">{t("enquiryForm.countryPlaceholder")}</option>
              <option value="USA">{t("enquiryForm.countryOptions.USA")}</option>
              <option value="UK">{t("enquiryForm.countryOptions.UK")}</option>
              <option value="Canada">{t("enquiryForm.countryOptions.Canada")}</option>
              <option value="Australia">{t("enquiryForm.countryOptions.Australia")}</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder={t("enquiryForm.messagePlaceholder")}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">{t("enquiryForm.submit")}</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
