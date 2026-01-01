// AboutSection.jsx
import styled from "styled-components";
import SectionBlock1 from "../sections/SectionBlock1";
import SectionBlock2 from "../sections/SectionBlock2";
import SectionBlock3 from "../sections/SectionBlock3";
import SectionBlock4 from "../sections/SectionBlock4";
import SectionBlock5 from "../sections/SectionBlock5";
import SectionBlock6 from "../sections/SectionBlock6";
const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.aboutbg};
  display: flex;
  flex-direction: column;
`;

const AboutSection = () => {
  return (
    <Section>
      <SectionBlock1 />
      <SectionBlock2 />
      <SectionBlock3 />
      <SectionBlock4 />
      <SectionBlock5 />
      <SectionBlock6 />
    </Section>
  );
};

export default AboutSection;
