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
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  z-index: 1;
`;

const FloatingCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
  mix-blend-mode: exclusion;
  pointer-events: none;
  z-index: 2;
`;

const Circle1 = styled(FloatingCircle)`
  width: 120px;
  height: 120px;
  top: 40%;
  left: 15%;
  animation: ${float} 13s ease-in-out infinite;
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
  pointer-events: none;
  mix-blend-mode: exclusion;
  z-index: 2;
`;

const Orbit1 = styled(RotatingWrapper)`
  width: 300px;
  height: 1200px;
  animation: ${rotate} 10s linear infinite;
`;

const Orbit2 = styled(RotatingWrapper)`
  width: 200px;
  height: 200px;
  animation: ${rotate} 20s linear infinite reverse;
`;

const Orbit3 = styled(RotatingWrapper)`
  width: 400px;
  height: 400px;
  animation: ${rotate} 18s linear infinite;
`;

const HeroSection = () => {
  return (
    <Section>
      <Circle1 />
      <Circle2 />
      <Circle3 />

      <Orbit1>
        <FloatingCircle
          style={{
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
          style={{
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
          style={{
            width: "80px",
            height: "80px",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Orbit3>
      <Title>NOWMAKES, 환영합니다</Title>
    </Section>
  );
};

export default HeroSection;
