// SectionBlock1.jsx
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.section`
  width: 100%;
  height: 200vh;
  background: linear-gradient(180deg, #ffffff 0%, #f6f6f6 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  max-width: 900px;
  padding: 0 20px;
  text-align: center;
`;

const Line = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-bottom: 200px;
  opacity: 0;
  transform: translateY(40px);
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionBlock1 = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    linesRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 10%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const lines = [
    "홈페이지, 정말 필요한 걸까?",
    "그냥 인스타그램으로도 충분한 거 아닐까?",
    "정작 아무도 안 보면 소용없는 거 아냐?",
    "만들자니 돈도 시간도 걱정이고,",
    "안 만들자니 뭔가 자꾸 놓치는 기분이고.",
    "고민하고 계신가요?",
  ];

  return (
    <Wrapper>
      <Content>
        {lines.map((text, i) => (
          <Line key={i} ref={(el) => (linesRef.current[i] = el)}>
            {text}
          </Line>
        ))}
      </Content>
    </Wrapper>
  );
};

export default SectionBlock1;
