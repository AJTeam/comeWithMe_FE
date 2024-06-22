import * as s from "./style";
import { TopBarSVG } from "../../Assets/svgs";

function TopNavbar({ selected }) {
  return (
    <>
      <s.NavbarContainer>
        {selected === "Home" && (
          <>
            <s.NavBarText></s.NavBarText>
            <TopBarSVG />
          </>
        )}
        {selected === "Partner" && (
          <>
            <s.NavBarText>파트너</s.NavBarText>
            <TopBarSVG />
          </>
        )}
        {selected === "Profile" && (
          <>
            <s.NavBarText>프로필</s.NavBarText>
            <TopBarSVG />
          </>
        )}
        {selected === "Shop" && (
          <>
            <s.NavBarText>포인트 상점</s.NavBarText>
            <TopBarSVG />
          </>
        )}
      </s.NavbarContainer>
    </>
  );
}

export default TopNavbar;
