import * as s from "./style";
import { HomeSVG, PartnerSVG, ProfileSVG, ShopSVG, HomeActiveSVG, PartnerActiveSVG, ProfileActiveSVG, ShopActiveSVG } from "../../Assets/svgs";
import { useState } from "react";

function Navbar() {
  const [selected, setSelected] = useState("Home");

  const handleIconClick = (icon) => {
    setSelected(icon);
  };

  return (
    <s.NavbarContainer>
      <s.NavbarIconContainer onClick={() => handleIconClick("Profile")}>
        {selected === "Profile" ? <ProfileActiveSVG /> : <ProfileSVG />}
        <s.NavBarIconText selected={selected === "Profile"}>프로필</s.NavBarIconText>
      </s.NavbarIconContainer>
      <s.NavbarIconContainer onClick={() => handleIconClick("Partner")}>
        {selected === "Partner" ? <PartnerActiveSVG /> : <PartnerSVG />}
        <s.NavBarIconText selected={selected === "Partner"}>파트너</s.NavBarIconText>
      </s.NavbarIconContainer>
      <s.NavbarIconContainer onClick={() => handleIconClick("Home")}>
        {selected === "Home" ? <HomeActiveSVG /> : <HomeSVG />}
        <s.NavBarIconText selected={selected === "Home"}>홈</s.NavBarIconText>
      </s.NavbarIconContainer>
      <s.NavbarIconContainer onClick={() => handleIconClick("Shop")}>
        {selected === "Shop" ? <ShopActiveSVG /> : <ShopSVG />}
        <s.NavBarIconText selected={selected === "Shop"}>상점</s.NavBarIconText>
      </s.NavbarIconContainer>
    </s.NavbarContainer>
  );
}

export default Navbar;
