// SectionBlock5.jsx
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.aboutbg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 20px;
  position: relative;
`;

const FixedText = styled.div`
  max-width: 800px;
  text-align: center;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.8;
  white-space: pre-line;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SectionBlock5 = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper>
      <FixedText ref={ref}>
        수십 개의 브랜드와 함께한 경험,\n 기획 → 디자인 → 개발까지 연결되는\n
        하나의 팀으로서,\n 결과를 만드는 데 집중해왔어요.
      </FixedText>
    </Wrapper>
  );
};

export default SectionBlock5;
