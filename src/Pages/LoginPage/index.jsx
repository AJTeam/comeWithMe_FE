import * as s from "./style";
import axios from "axios";
import qs from "qs";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState, useEffect } from "react";
import { PartnerActiveSVG } from "../../Assets/svgs";

function LoginPage() {
  const [loading, setLoading] = useState(true);
  const [needtoSignUp, setNeedtoSignUp] = useState(false);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const checkAccessToken = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        window.location.href = "/mainpage";
      } else {
        setLoading(false);
      }
    };

    checkAccessToken();

    return () => {};
  }, []);

  const handleSignUp = async () => {
    const userData = {
      username: username,
      age: parseInt(age),
      gender: gender,
    };

    const config = {
      method: "post",
      url: "http://192.168.100.201:8080/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: userData,
    };

    try {
      const resp = await axios.request(config);
      console.log("Response:", resp.data);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSetWoman = () => {
    setGender("FEMALE");
  };

  const handleSetMan = () => {
    setGender("MALE");
  };

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleGoogleLogin = async (res) => {
    console.log("Google login success:", res);
    const idToken = res.credential;

    const base64Url = idToken.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    const userInfo = JSON.parse(jsonPayload);
    console.log("User Info:", userInfo);

    localStorage.setItem("accessToken", idToken);

    const data = qs.stringify({ idToken: idToken });
    const config = {
      method: "post",
      url: "http://192.168.100.201:8080/login",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        idToken: idToken,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      const username = userInfo.username || response.data.username || "Unknown";
      localStorage.setItem("username", username);

      window.location.href = "/mainpage";
    } catch (error) {
      if (error.response && error.response.status === 301) {
        setNeedtoSignUp(true);
      } else {
        console.error("Error:", error);
      }
    }

    window.location.reload();
  };

  const GoogleLoginButton = () => {
    const clientId = "1080296234585-v5im6bv7rqvm28f1j5s7jg9ka7f0ojsq.apps.googleusercontent.com";
    return (
      <>
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={(err) => {
              console.log("Google login error:", err);
            }}
          />
        </GoogleOAuthProvider>
      </>
    );
  };

  return (
    <>
      <s.BackgroundContainer>
        {loading && <s.LoadingAppContainer>같이 하자</s.LoadingAppContainer>}
        <s.LoginAppContainer style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease-in-out" }}>
          <s.LoginAppLogoContainer>
            <PartnerActiveSVG />
            <s.LoginAppLogoText>같이 하자</s.LoginAppLogoText>
          </s.LoginAppLogoContainer>
          <s.LoginAppLoginContainer>
            <s.LoginAppGoogleLoginDescriptionText>간편로그인 후 이용 가능합니다!</s.LoginAppGoogleLoginDescriptionText>
            <GoogleLoginButton />
          </s.LoginAppLoginContainer>
          {needtoSignUp && (
            <>
              <s.GoogleSignUpContainer>
                <s.GoogleSignUpTitleText>회원가입이 필요한 서비스입니다.</s.GoogleSignUpTitleText>
                <s.GoogleSignUpInputContainerBox>
                  <s.GoogleSignUpInputContainer placeholder="닉네임" onChange={handleUsernameChange} />
                  <s.GoogleSignUpInputContainer placeholder="나이" onChange={handleAgeChange} />
                </s.GoogleSignUpInputContainerBox>
                <s.GoogleSignUpInputContainerBox>
                  <s.GoogleSignupInputButton onClick={handleSetMan}>남성</s.GoogleSignupInputButton>
                  <s.GoogleSignupInputButton onClick={handleSetWoman}>여성</s.GoogleSignupInputButton>
                </s.GoogleSignUpInputContainerBox>
                <s.GoogleSignupButton onClick={handleSignUp}>회원가입</s.GoogleSignupButton>
              </s.GoogleSignUpContainer>
            </>
          )}
        </s.LoginAppContainer>
      </s.BackgroundContainer>
    </>
  );
}

export default LoginPage;
