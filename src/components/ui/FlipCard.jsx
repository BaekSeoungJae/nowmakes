import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 280px;
  height: 180px;
  perspective: 1000px;
  margin: 1rem;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;

  ${Card}:hover & {
    transform: rotateY(180deg);
  }

  &.flipped {
    transform: rotateY(180deg);
  }

  @media (hover: none) {
    ${Card}:hover & {
      transform: none;
    }
  }
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
`;

const CardFront = styled(Face)`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const CardBack = styled(Face)`
  background: ${({ theme }) => theme.accent};
  color: #fff;
  transform: rotateY(180deg);
  text-align: center;
  transition: background-color 0.3s ease-in-out;
`;

const FlipCard = ({ title, desc, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const match = window.matchMedia("(hover: none)");
    setIsMobile(match.matches);
  }, []);

  const handleClick = () => {
    if (isMobile) setIsFlipped((prev) => !prev);
    if (onClick) onClick(); // ✅ 여기서 props 실행
  };

  return (
    <Card onClick={handleClick}>
      <CardInner className={isFlipped ? "flipped" : ""}>
        <CardFront>
          <span>{title}</span>
        </CardFront>
        <CardBack>
          <p>{desc}</p>
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default FlipCard;
