import styled from "styled-components";

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: white;

  padding-top: 90px;

  width: 600px;
  height: calc(100vh - 90px);

  font-size: 45px;
  overflow: scroll;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const FindPartnerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 600px;
  gap: 20px;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const FindPartnerTextContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 40px;

  overflow: hidden;
`;

export const FindPartnerText = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: black;

  @media (max-width: 480px) {
    font-size: 22px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

export const FindPartnerTextHighlight = styled.span`
  color: #3572ef;
`;

export const FindPartnerListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const FindPartnerBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-top: 1px solid black;
  padding: 30px;
  gap: 3px;
  margin-top: 0px;
  width: 400px;

  @media (max-width: 480px) {
    width: 300px;
  }

  @media (max-width: 400px) {
    width: 200px;
  }
`;

export const FindPartnerBoxTitleText = styled.p`
  color: #3572ef;
  font-size: 22px;
  font-weight: bold;
  margin: 0;
`;

export const FindPartnerBoxDescriptionText = styled.p`
  font-size: 16px;
  margin-top: 5px;
`;

export const FindPartnerBoxBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FindPartnerBoxCurrentPopulationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FindPartnerBoxCurrentPopulationText = styled.p`
  font-size: 14px;
  color: #3572ef;
  margin: 0;
  margin-left: 10px;
`;

export const FindPartnerBoxButton = styled.button`
  cursor: pointer;
  color: white;
  background-color: #3572ef;
  width: 90px;
  height: 26px;
  font-size: 12px;
  border: none;
  border-radius: 30px;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  height: 100vh;
  background-color: white;
`;

export const ModalFirstContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  flex-direction: column;
`;

export const ModalFirstContainerSpacebetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ModalFirstContainerTitleText = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #3572ef;
  margin-left: 10px;
`;

export const ModalFirstContainerPopulationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
`;

export const ModalFirstContainerPopulationText = styled.p`
  margin: 0;
  font-size: 18px;
  color: #3572ef;
`;

export const ModdalFirstContainerFlexStartContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-left: 20px;
`;

export const ModalFirstContainerDescText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const ModalFirstConstainerStartChatButton = styled.button`
  cursor: pointer;
  width: 80px;
  padding: 5px;
  color: white;
  border-radius: 15px;
  background-color: #3572ef;
  border: 0;
`;

export const hr = styled.hr`
  width: 97%;
  border: 0.5px solid black;
  margin: 0;
  padding: 0;
  margin-top: 30px;
`;

export const ModalSecondContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 30px;
  flex-direction: column;
  width: 100%;
`;

export const ModalSecondContainerTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
`;

export const ModalSecondContainerTitleText = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalSecondContainerDescText = styled.p`
  margin: 0;
  font-size: 14px;
  margin-top: 10px;
`;

export const ModalSecondBigContainer = styled.div`
  background-color: #3572ef;
  padding: 10px;
  border-radius: 10px;
  color: white;
  margin-top: 20px;
  width: 75%;
  font-size: 18px;
  margin-left: 40px;
`;
