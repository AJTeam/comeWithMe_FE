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

export const NavbarIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBarText = styled.p`
  font-size: 22px;
  font-weight: bold;
`;
