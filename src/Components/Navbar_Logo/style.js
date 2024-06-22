import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  justify-content: space-between;
  align-items: center;
  height: 120px;

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (min-width: 600px) {
    width: 550px;
  }
`;

export const NavBarLogoText = styled.p`
  @font-face {
    font-family: "RixInooAriDuriR";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/RixInooAriDuriR.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  color: #3572ef;
  font-size: 30px;
  font-family: "RixInooAriDuriR", sans-serif;
  padding-left: 12px;
`;
