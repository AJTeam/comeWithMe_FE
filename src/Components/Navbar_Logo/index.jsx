import * as s from "./style";
import { TopBarSVG } from "../../Assets/svgs";

function TopNavbar() {
  return (
    <>
      <s.NavbarContainer>
        <div />
        <s.NavBarLogoText>같이 하자</s.NavBarLogoText>
        <TopBarSVG />
      </s.NavbarContainer>
    </>
  );
}

export default TopNavbar;
