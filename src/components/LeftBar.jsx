import styled from "styled-components";

const Bar = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.herobg};
  transform: ${({ visible }) =>
    visible ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({ visible }) =>
    visible ? "2px 0 8px rgba(0,0,0,0.1)" : "none"};
  z-index: 999;
  padding: 1rem;
`;

const LeftBar = ({ visible }) => {
  return <Bar visible={visible}>LeftBar</Bar>;
};

export default LeftBar;
