import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  width: 600px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const NavbarIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NavBarIconText = styled.p`
  font-size: 12px;
  color: ${(props) => (props.selected ? "#3572EF" : "#a2a2a9")};
`;
