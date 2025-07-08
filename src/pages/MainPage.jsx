import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SampleSection from "./SampleSection";
import InfoSection from "./InfoSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MotionCircle from "../animations/MotionCircle";
import ShowcaseSection from "./ShowcaseSection";
import LeftBar from "../components/LeftBar";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.herobg};
  transition: background-color 0.3s ease-in-out;
`;
const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

const MainPage = ({ toggleTheme }) => {
  const [currentSection, setCurrentSection] = useState("hero");
  const [hideCursor, setHideCursor] = useState(false);
  const [showLeftBar, setShowLeftBar] = useState(false);

  const heroRef = useRef(null);
  const showcaseRef = useRef(null);
  const aboutRef = useRef(null);
  const sampleRef = useRef(null);
  const infoRef = useRef(null);
  const footerRef = useRef(null);

  const sectionRefs = {
    hero: heroRef,
    showcase: showcaseRef,
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

    [heroRef, showcaseRef, aboutRef, sampleRef, infoRef, footerRef].forEach(
      (ref) => {
        if (ref.current) observer.observe(ref.current);
      }
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setShowLeftBar(e.clientX < 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Container>
      <LeftBar visible={showLeftBar} />
      <MotionCircle
        currentSection={currentSection}
        style={{ opacity: hideCursor ? 0 : 1 }}
      />
      <Header
        currentSection={currentSection}
        sectionRefs={sectionRefs}
        setHideCursor={setHideCursor}
      />
      <MainWrapper>
        <section id="hero" ref={sectionRefs.hero}>
          <HeroSection setHideCursor={setHideCursor} />
        </section>
        <section id="showcase" ref={sectionRefs.showcase}>
          <ShowcaseSection toggleTheme={toggleTheme} />
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
      </MainWrapper>
    </Container>
  );
};

export default MainPage;
