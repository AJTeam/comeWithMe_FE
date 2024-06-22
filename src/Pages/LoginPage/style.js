import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

export const LoadingAppContainer = styled.div`
  @font-face {
    font-family: "RixInooAriDuriR";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/RixInooAriDuriR.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3572ef;
  width: 600px;
  height: 100vh;
  color: white;
  font-size: 45px;
  font-family: "RixInooAriDuriR", sans-serif;
  animation: ${fadeOut} 0.5s ease-in-out forwards;
  animation-delay: 1.5s;
`;

export const LoginAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  height: 100vh;
  width: 600px;
  gap: 85px;
`;

export const LoginAppLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const LoginAppLogoText = styled.p`
  @font-face {
    font-family: "RixInooAriDuriR";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/RixInooAriDuriR.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  color: #3572ef;
  font-size: 48px;
  font-family: "RixInooAriDuriR", sans-serif;
  margin: 0;
`;

export const LoginAppLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginAppGoogleLoginDescriptionText = styled.p`
  margin: 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 5px;
`;

export const LoginAppGoogleLoginSignupText = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;

export const LoginAppGoogleLoginButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  width: 280px;
  height: 45px;
`;

export const GoogleSignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const GoogleSignUpTitleText = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const GoogleSignUpInputContainerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const GoogleSignUpInputContainer = styled.input`
  width: 200px;
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const GoogleSignupInputButton = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const GoogleSignupButton = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
