import { useState } from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const row = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-400px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Section = styled.section`
  width: 100%;
  height: 900px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.herobg};
  transition: background-color 0.3s ease-in-out;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  z-index: 1;
`;

const FloatingCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
  mix-blend-mode: exclusion;
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;

const Circle1 = styled(FloatingCircle)`
  width: 120px;
  height: 120px;
  top: 70%;
  left: 30%;
  animation: ${row} 13s ease-in-out infinite;
  animation-delay: 0s;
`;

const Circle2 = styled(FloatingCircle)`
  width: 80px;
  height: 80px;
  top: 60%;
  left: 75%;
  animation: ${float} 20s ease-in-out infinite reverse;
  animation-delay: 1.5s;
`;

const Circle3 = styled(FloatingCircle)`
  width: 100px;
  height: 100px;
  top: 40%;
  left: 50%;
  animation: ${float} 11s ease-in-out infinite;
  animation-delay: 0.8s;
`;

const RotatingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: center;
  mix-blend-mode: exclusion;
  z-index: 2;
`;

const Orbit1 = styled(RotatingWrapper)`
  width: 100px;
  height: 1200px;
  animation: ${rotate} 10s linear infinite;
  z-index: 1;
`;

const Orbit2 = styled(RotatingWrapper)`
  width: 200px;
  height: 200px;
  animation: ${rotate} 20s linear infinite reverse;
  z-index: 1;
`;

const Orbit3 = styled(RotatingWrapper)`
  width: 100px;
  height: 400px;
  animation: ${rotate} 18s linear infinite;
  z-index: 1;
`;

const HeroSection = ({ setHideCursor }) => {
  const colors = [
    "rgba(255, 255, 255, 1)", // 안정적인 흰색 반전
    "rgb(79, 206, 191)", // 청록 느낌
    "rgb(15, 74, 200)",
    "rgb(97, 32, 188)",
    "rgb(222, 179, 86)",
  ];
  const [colorIndex, setColorIndex] = useState(0);
  const handleClick = () => {
    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <Section>
      <Circle1
        onClick={handleClick}
        onMouseEnter={() => setHideCursor(true)}
        onMouseLeave={() => setHideCursor(false)}
        style={{ background: colors[colorIndex] }}
      />
      <Circle2
        onClick={handleClick}
        onMouseEnter={() => setHideCursor(true)}
        onMouseLeave={() => setHideCursor(false)}
        style={{ background: colors[colorIndex] }}
      />
      <Circle3
        onClick={handleClick}
        onMouseEnter={() => setHideCursor(true)}
        onMouseLeave={() => setHideCursor(false)}
        style={{ background: colors[colorIndex] }}
      />

      <Orbit1>
        <FloatingCircle
          onClick={handleClick}
          onMouseEnter={() => setHideCursor(true)}
          onMouseLeave={() => setHideCursor(false)}
          style={{
            background: colors[colorIndex],
            width: "60px",
            height: "60px",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Orbit1>
      <Orbit2>
        <FloatingCircle
          onClick={handleClick}
          onMouseEnter={() => setHideCursor(true)}
          onMouseLeave={() => setHideCursor(false)}
          style={{
            background: colors[colorIndex],
            width: "40px",
            height: "40px",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Orbit2>
      <Orbit3>
        <FloatingCircle
          onClick={handleClick}
          onMouseEnter={() => setHideCursor(true)}
          onMouseLeave={() => setHideCursor(false)}
          style={{
            background: colors[colorIndex],
            width: "80px",
            height: "80px",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Orbit3>
      <Title>NOWMAKES</Title>
    </Section>
  );
};

export default HeroSection;
