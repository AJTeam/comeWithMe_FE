import styled from "styled-components";

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

export const hr = styled.hr`
  width: 80%;
  border: 0.3px solid black;
  margin-top: 2px;
  margin-bottom: 5px;
  padding: 0;
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  flex-direction: column;

  width: 600px;
  height: 100vh;

  overflow: hidden;

  font-size: 45px;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const HomeSliderContainer = styled.div`
  width: calc(600px - 50px);
  height: 120px;
  background-image: linear-gradient(180deg, #3572ef 10%, #050c9c 90%);
  margin-top: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
`;

export const HomeSliderTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HomeSliderTitleText = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const HomeSliderTitleButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 30px;
  color: white;
  width: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin: 0;
  cursor: pointer;
`;

export const NameOfWeekContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 25px;
`;

export const NameOfWeekText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const NameOfWeekTextHighlight = styled.span`
  color: #3572ef;
`;

export const RecommendedMissionListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-left: 25px;
`;

export const RecommendedMissionListText = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

export const RecommendedMissionListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 25px;
  margin: 0;
  margin-top: 10px;
`;

export const RecommendedMission = styled.div`
  padding: 10px;
  font-size: 22px;
  border: 0.5px solid black;
  border-radius: 50px;
  margin: 0;
`;

export const hrline = styled.hr`
  width: 90%;
  border: 0.3px solid black;
`;

export const CallenderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const CurrentMonth = styled.p`
  font-size: 22px;
  margin: 0;
  padding-left: 25px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Callender = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const CallenderText = styled.p`
  margin: 0;
  font-size: 8px;
`;

export const CallenderDateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;

export const CallenderDateFull = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: #3572ef;
  cursor: pointer;
`;

export const CallenderDateLight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: rgba(53, 114, 239, 0.5);
  border: 0.5px solid black;
  cursor: pointer;
`;

export const CallenderDateNone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: white;
  border: 0.5px solid black;
  cursor: pointer;
`;

export const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 80px;
  width: 100%;
  padding-bottom: 4px;
`;

export const TodoStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  border-radius: 50px;
  padding: 5px;
  width: 70px;
  margin: 0;
  font-size: 12px;
`;

export const TodoName = styled.div`
  font-size: 18px;
  margin: 0;
`;
