import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 800px;
  background-color: #f0f0f0;
`;

const Heading = styled.h2`
  font-size: 2rem;
`;

const InfoSection = () => {
  return (
    <Section>
      <Heading>서비스 안내</Heading>
    </Section>
  );
};

export default InfoSection;
