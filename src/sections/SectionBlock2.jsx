// SectionBlock2.jsx
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import body01 from "../assets/images/2-2.png";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.section`
  width: 100%;
  height: 160vh; /* 충분한 스크롤 공간 확보 */
  position: relative;
  background: transparent;
`;

const FixedImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  text-align: center;
  color: #000000;
  font-size: 2.4rem;
  font-weight: 600;
  white-space: pre-line;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    width: 90%;
  }
`;

const SectionBlock2 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    tl.fromTo(
      textRef.current,
      { scale: 1.8, opacity: 0 },
      { scale: 1, opacity: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <Wrapper>
      <FixedImage imageurl={body01} />
      <TextBox ref={textRef}>
        애플, 삼성, 스타벅스, 구글…\n 우리가 아는 브랜드는 모두\n 홈페이지를
        갖고 있습니다.
      </TextBox>
    </Wrapper>
  );
};

export default SectionBlock2;
