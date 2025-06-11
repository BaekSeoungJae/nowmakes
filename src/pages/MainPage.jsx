import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SampleSection from "../components/SampleSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 70px;
`;

const MainPage = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const sampleRef = useRef(null);
  const infoRef = useRef(null);
  const footerRef = useRef(null);

  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    sample: sampleRef,
    info: infoRef,
    footer: footerRef,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    [heroRef, aboutRef, sampleRef, infoRef, footerRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header currentSection={currentSection} sectionRefs={sectionRefs} />
      <Container>
        <section id="hero" ref={sectionRefs.hero}>
          <HeroSection />
        </section>
        <section id="about" ref={sectionRefs.about}>
          <AboutSection />
        </section>
        <section id="sample" ref={sectionRefs.sample}>
          <SampleSection />
        </section>
        <section id="info" ref={sectionRefs.info}>
          <InfoSection />
        </section>
        <Footer />
      </Container>
    </>
  );
};

export default MainPage;
