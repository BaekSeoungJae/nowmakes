// SectionBlock6.jsx
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 160px 20px;
  background-color: ${({ theme }) => theme.aboutbg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Quote = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  color: #666;
  margin-bottom: 40px;
`;

const Message = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.8;
  white-space: pre-line;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CTAButton = styled.button`
  background-color: #111;
  color: #fff;
  border: none;
  padding: 16px 32px;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const SectionBlock6 = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Wrapper ref={ref}>
      <Content>
        <Quote>
          “The way to get started is to quit talking and begin doing.” — Walt
          Disney
        </Quote>
        <Message>
          고민은 성공을 늦출 뿐이에요.\n 지금, 나우와 함께 시작해보세요.
        </Message>
        <CTAButton>지금 무료 상담 신청하기</CTAButton>
      </Content>
    </Wrapper>
  );
};

export default SectionBlock6;
