import styled from "styled-components";
import { useEffect, useState } from "react";

const Circle = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 5;
  mix-blend-mode: exclusion;

  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;

const MotionCircle = ({ currentSection, style }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getCircleStyle = () => {
    switch (currentSection) {
      case "hero":
        return {
          size: 100,
          color: "rgba(255,255,255,1)",
          border: "1px solid rgba(255,255,255,0.2)",
        };
      case "showcase":
        return {
          size: 50,
          color: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(47, 0, 255, 0.2)",
        };
      case "about":
        return {
          size: 80,
          color: "rgba(0, 255, 255, 0.1)",
          border: "1px solid rgba(0, 255, 255, 0.2)",
        };
      case "sample":
        return {
          size: 120,
          color: "rgba(255, 0, 128, 0.05)",
          border: "1px solid rgba(255, 0, 128, 0.2)",
        };
      default:
        return {
          size: 100,
          color: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.2)",
        };
    }
  };

  const { size, color, border } = getCircleStyle();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Circle
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        border: border,
        opacity: style?.opacity ?? 1,
      }}
    />
  );
};

export default MotionCircle;
