import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 40px 20px;
  text-align: center;
  background-color: #222;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2025 NOWMAKES. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
