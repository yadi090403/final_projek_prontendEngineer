import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import GlobalSection from "../../components/GlobalSection/GlobalSection";
import FormCovid from "../../components/FormCovid/FormCovid";
import Footer from "../../components/Footer/Footer";
import Provensi from "../../components/Provensi/Provensi";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GlobalSection />
      <Provensi />
      <FormCovid />
      <Footer />
    </div>
  );
}
export default HomePage;
