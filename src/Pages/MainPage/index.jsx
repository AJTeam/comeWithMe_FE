import * as s from "./style";
import { useState, useEffect } from "react";
import NavbarLogo from "../../Components/Navbar_Logo";
import BottomNavbar from "../../Components/Navbar_Bottom";
import TopNavbar from "../../Components/Navbar_Top";
import { HomePage, PartnerPage, ProfilePage, ShopPage } from "../../Components/Pages";

function MainPage() {
  const [selected, setSelected] = useState("Home");

  useEffect(() => {
    const checkAccessToken = () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        window.location.href = "/";
      }
    };
    checkAccessToken();
    return () => {};
  }, []);

  return (
    <>
      <s.BackgroundContainer>
        {selected === "Home" && (
          <>
            <NavbarLogo />
            <HomePage />
            <BottomNavbar selected={selected} setSelected={setSelected} />
          </>
        )}
        {selected === "Partner" && (
          <>
            <TopNavbar selected={selected} />
            <PartnerPage />
            <BottomNavbar selected={selected} setSelected={setSelected} />
          </>
        )}
        {selected === "Profile" && (
          <>
            <TopNavbar selected={selected} />
            <ProfilePage />
            <BottomNavbar selected={selected} setSelected={setSelected} />
          </>
        )}
        {selected === "Shop" && (
          <>
            <TopNavbar selected={selected} />
            <ShopPage />
            <BottomNavbar selected={selected} setSelected={setSelected} />
          </>
        )}
      </s.BackgroundContainer>
    </>
  );
}

export default MainPage;
