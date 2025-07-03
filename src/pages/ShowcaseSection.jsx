import React from "react";
import styled from "styled-components";
import FlipCard from "../components/ui/FlipCard";

const Section = styled.section`
  padding: 100px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* 반응형 대응 */
  margin-top: 50px;
  gap: 1rem;
`;

const ShowcaseSection = ({ toggleTheme }) => {
  return (
    <Section>
      <h2>✨ 기능을 직접 체험해보세요</h2>
      <CardWrapper>
        <FlipCard
          title="Hover 인터랙션"
          desc="PC에선 hover, 모바일에선 tap으로 작동합니다."
        />
        <FlipCard
          title="다크모드 체험"
          desc="버튼을 눌러 테마를 전환해보세요!"
          onClick={toggleTheme}
        />
        <FlipCard
          title="폰트 바꾸기"
          desc="클릭 한 번으로 폰트를 바꿀 수 있어요."
        />
      </CardWrapper>
    </Section>
  );
};

export default ShowcaseSection;
