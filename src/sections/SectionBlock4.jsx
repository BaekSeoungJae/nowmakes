// SectionBlock4.jsx
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 160px 40px;
  background-color: ${({ theme }) => theme.aboutbg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  max-width: 1000px;
  width: 100%;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 40px 30px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const Label = styled.h3`
  font-size: 1.4rem;
  margin-top: 16px;
  color: #333;
`;

const Paragraph = styled.p`
  margin-top: 80px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.8;
  white-space: pre-line;
`;

const SectionBlock4 = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gridRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Wrapper>
      <Inner>
        <Grid ref={gridRef}>
          <Card>
            {/* <CheckCircle size={40} color="#4caf50" /> */}
            <Label>1:1 전담 팀 배정</Label>
          </Card>
          <Card>
            {/* <CheckCircle size={40} color="#4caf50" /> */}
            <Label>맞춤형 설계 그대로 구현</Label>
          </Card>
          <Card>
            {/* <CheckCircle size={40} color="#4caf50" /> */}
            <Label>타겟 전략 기반 접근</Label>
          </Card>
        </Grid>

        <Paragraph>
          당신이 원하는 느낌, 구조, 기능까지\n 그대로 실현하는 것,\n 그게 우리가
          하는 일입니다.
        </Paragraph>
      </Inner>
    </Wrapper>
  );
};

export default SectionBlock4;
