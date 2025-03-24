"use client";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import styles from "./page.module.scss";
import Analysis from "./components/analysis/Analysis";
import FastMatching from "./components/fastMatching/FastMatching";
import TradeSteps from "./components/tradeSteps/TradeSteps";
import WhyChooseUs from "./components/choose/WhyChooseUs";
import MT4Slider from "./components/registerSlider/MT4Slider";
import Navigation from "./components/navigation/Navigation";
import BannerImage from "./widget/bannerImage/bannerImage";
import GoToTopButton from "./widget/goToTopButton/goToTopButton";
import EnquiryForm from "./components/enquiryForm/EnquiryForm";

export default function Home() {
  return (
    <>
      <div className={styles.stickyHeader}>
        <Header />
      </div>
      {/* i make each section as a component */}
      <main className={styles.container}>
        <HeroSection />
        <FastMatching />
        <Analysis />
        <BannerImage height={500} />
        <TradeSteps />
        <MT4Slider />
        <BannerImage height={100} />
        <WhyChooseUs />
        <Navigation />
        <EnquiryForm />
        <GoToTopButton />
      </main>
    </>
  );
}
