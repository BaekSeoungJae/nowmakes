import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const HeroSection = () => {
  return (
    <Section>
      <Title>NOWMAKES에 오신 걸 환영합니다</Title>
    </Section>
  );
};

export default HeroSection;
