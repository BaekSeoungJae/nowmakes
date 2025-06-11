import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Heading = styled.h2`
  font-size: 2rem;
`;

const AboutSection = () => {
  return (
    <Section>
      <Heading>About NOWMAKES</Heading>
    </Section>
  );
};

export default AboutSection;
