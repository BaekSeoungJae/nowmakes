import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: white;
  z-index: 999;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  margin-left: 2rem;
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ active }) => (active ? "#222" : "#888")};
  border-bottom: ${({ active }) => (active ? "2px solid #333" : "none")};
  padding-bottom: 2px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const Header = ({ currentSection, sectionRefs }) => {
  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => scrollToSection("hero")}>NOWMAKES</Logo>
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
