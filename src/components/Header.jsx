import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: transparent;
  backdrop-filter: blur(15px); // 🎯 핵심
  -webkit-backdrop-filter: blur(15px);
  z-index: 999;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-around;
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ active, theme }) => (active ? theme.text : theme.headertext)};
  border-bottom: ${({ active, theme }) =>
    active ? `2px solid ${theme.text}` : "none"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: all 0.1s ease-in-out;
  }
`;

const Header = ({ currentSection, sectionRefs, setHideCursor }) => {
  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderContainer
      onMouseEnter={() => setHideCursor(true)}
      onMouseLeave={() => setHideCursor(false)}
    >
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        NOWMAKES
      </Logo>
      <Nav>
        <NavItem
          onClick={() => scrollToSection("about")}
          active={currentSection === "about"}
        >
          소개
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("sample")}
          active={currentSection === "sample"}
        >
          샘플
        </NavItem>
        <NavItem
          onClick={() => scrollToSection("info")}
          active={currentSection === "info"}
        >
          서비스
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
