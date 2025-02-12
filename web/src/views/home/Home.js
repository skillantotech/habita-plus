import React from "react";
import Navbar from "../navbar/Navbar";
import PricingSection from "../PricingSection/PricingSection";
import ContactSection from "../ContactSection/ContactSection";
import ElevatingApartment from "../ElevatingApartment/ElevatingApartment";
import HeroSection from "../HeroSection/HeroSection";
import MainCardSection from "../CardSection/MainCardSection";
import ServicesSection from "../CardSection/ServiceSection";
import Footer from "../Footer/Footer";
import Contacts from "../contacts/contacts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <MainCardSection/>
      <ServicesSection/>
      <ElevatingApartment/>
      <PricingSection/>
      <ContactSection/>

      <Contacts/>
      <Footer/>
    </div>
  );
};

export default Home;
