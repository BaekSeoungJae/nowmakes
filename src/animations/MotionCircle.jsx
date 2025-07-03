import { useEffect, useState } from "react";

const MotionCircle = ({ currentSection }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getCircleStyle = () => {
    switch (currentSection) {
      case "hero":
        return {
          size: 200,
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
    <div
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        border: border,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 5,
        mixBlendMode: "exclusion",
      }}
    />
  );
};

export default MotionCircle;
