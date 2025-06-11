import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
`;

const Heading = styled.h2`
  font-size: 2rem;
`;

const SampleSection = () => {
  return (
    <Section>
      <Heading>Sample Works</Heading>
    </Section>
  );
};

export default SampleSection;
