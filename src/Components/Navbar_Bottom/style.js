import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  width: 600px;
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.1);
  background-color: white;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const NavbarIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
`;

export const NavBarIconText = styled.p`
  font-size: 12px;
  color: ${(props) => (props.selected ? "#3572EF" : "#a2a2a9")};
`;
