import styled from "styled-components";
import FlipCard from "../components/ui/FlipCard";

const Section = styled.section`
  height: 900px;
  text-align: center;
  background-color: ${({ theme }) => theme.showcasebg};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 1rem;
`;

const ShowcaseSection = ({ toggleTheme }) => {
  return (
    <Section>
      <h2>
        원하는 홈페이지를 쉽게 만들고 한눈에 완성하세요.
        <br />
        처음이라도 걱정 없는 간편한 제작 경험,
        <br />
        nowmakes와 함께라면 시작이 쉬워집니다.
      </h2>
      <CardWrapper>
        <FlipCard
          title="Hover 인터랙션"
          desc="PC에선 hover, 모바일에선 tap으로 작동합니다."
        />
        <FlipCard
          title="다크모드"
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
