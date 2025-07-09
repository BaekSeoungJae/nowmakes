import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import styled from "styled-components";

// Styled Components
const Section = styled.section`
  width: 100%;
  height: 850px;
  position: relative;
  background-color: ${({ theme }) => theme.herobg};
  transition: background-color 0.3s ease-in-out;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const FloatingCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: exclusion;
  z-index: 2;
  pointer-events: auto;
  transition: background-color 0.3s ease-in-out;
`;

const HeroSection = ({ setHideCursor }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [ready, setReady] = useState(false);

  const HEIGHT = 850;

  const { count, minSize, maxSize } = useMemo(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    return isMobile
      ? { count: 8, minSize: 50, maxSize: 80 }
      : { count: 10, minSize: 60, maxSize: 100 };
  }, []);

  const colors = [
    "rgba(255, 255, 255, 1)",
    "rgb(79, 206, 191)",
    "rgb(15, 74, 200)",
    "rgb(97, 32, 188)",
    "rgb(222, 179, 86)",
  ];

  const circleSizes = useRef([]);
  const circleRefs = useRef([]);
  const animationFrameRef = useRef(null);
  const positionsRef = useRef([]);
  const velocitiesRef = useRef([]);
  const circleCountRef = useRef(count);

  const setCircleRef = useCallback((el, idx) => {
    if (el) circleRefs.current[idx] = el;
  }, []);

  useEffect(() => {
    circleSizes.current = Array.from({ length: count }).map(
      () => minSize + Math.random() * (maxSize - minSize)
    );

    positionsRef.current = circleSizes.current.map((size) => ({
      x: Math.random() * (window.innerWidth - size),
      y: Math.random() * (HEIGHT - size),
    }));

    velocitiesRef.current = circleSizes.current.map(() => ({
      x: (Math.random() - 0.5) * 1.5,
      y: (Math.random() - 0.5) * 1.5,
    }));

    setReady(true);
  }, [count, minSize, maxSize]);

  useEffect(() => {
    if (!ready) return;

    const animate = () => {
      const positions = positionsRef.current;
      const velocities = velocitiesRef.current;

      for (let i = 0; i < circleCountRef.current; i++) {
        const size = circleSizes.current[i];
        const radius = size / 2;
        let pos = positions[i];
        let vel = velocities[i];

        pos.x += vel.x;
        pos.y += vel.y;

        if (pos.x < 0 || pos.x > window.innerWidth - size) {
          vel.x *= -1;
          pos.x = Math.max(0, Math.min(pos.x, window.innerWidth - size));
        }
        if (pos.y < 0 || pos.y > HEIGHT - size) {
          vel.y *= -1;
          pos.y = Math.max(0, Math.min(pos.y, HEIGHT - size));
        }

        for (let j = i + 1; j < circleCountRef.current; j++) {
          const otherPos = positions[j];
          const otherVel = velocities[j];
          const otherSize = circleSizes.current[j];
          const otherRadius = otherSize / 2;

          const dx = pos.x + radius - (otherPos.x + otherRadius);
          const dy = pos.y + radius - (otherPos.y + otherRadius);
          const dist = Math.hypot(dx, dy);
          const minDist = radius + otherRadius;

          if (dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const vxRel = vel.x - otherVel.x;
            const vyRel = vel.y - otherVel.y;
            const dot = vxRel * nx + vyRel * ny;

            if (dot < 0) {
              const impulse = dot;
              vel.x -= impulse * nx;
              vel.y -= impulse * ny;
              otherVel.x += impulse * nx;
              otherVel.y += impulse * ny;
            }

            const overlap = 0.5 * (minDist - dist);
            pos.x += nx * overlap;
            pos.y += ny * overlap;
            otherPos.x -= nx * overlap;
            otherPos.y -= ny * overlap;
          }
        }

        const el = circleRefs.current[i];
        if (el) el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [ready]);

  useEffect(() => {
    const handleResize = () => {
      positionsRef.current = positionsRef.current.map((pos, idx) => {
        const size = circleSizes.current[idx];
        return {
          x: Math.min(Math.max(0, pos.x), window.innerWidth - size),
          y: Math.min(Math.max(0, pos.y), HEIGHT - size),
        };
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <Section>
      {ready &&
        Array.from({ length: circleCountRef.current }).map((_, idx) => {
          const size = circleSizes.current[idx];
          return (
            <FloatingCircle
              key={idx}
              ref={(el) => setCircleRef(el, idx)}
              onClick={handleClick}
              onMouseEnter={() => setHideCursor(true)}
              onMouseLeave={() => setHideCursor(false)}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: colors[colorIndex],
              }}
            />
          );
        })}
      <Title onClick={handleClick}>NOWMAKES</Title>
    </Section>
  );
};

export default HeroSection;
