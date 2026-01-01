// SectionBlock3.jsx
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 20px;
  background-color: ${({ theme }) => theme.aboutbg};
  transition: background-color 0.5s ease;
`;

const Content = styled.div`
  max-width: 900px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.8;
  white-space: pre-line;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SectionBlock3 = () => {
  const blockRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: blockRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => {
          gsap.to("body", {
            backgroundColor: "#111",
            color: "#fff",
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to("body", {
            backgroundColor: "#fff",
            color: "#000",
            duration: 0.5,
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper ref={blockRef}>
      <Content>
        <Paragraph>
          NOWMAKES는 단순히 웹사이트만 제작하지 않습니다.\n\n 우리는 브랜드의
          시작점부터 함께하며,\n 기획, 디자인, 개발까지 연결된\n 하나의 팀으로
          움직입니다.
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

export default SectionBlock3;
