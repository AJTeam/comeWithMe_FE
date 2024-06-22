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

export const MyProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  width: 100%;
  margin-top: 70px;
`;

export const MyProfilePicAndNameContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

export const ProfileImageContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ProfileNameText = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
`;

export const ProfileCurrentMessage = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const MyProfileCurrentMoodContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CallenderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const CurrentMonthHr = styled.hr`
  width: 60%;
  border: 0.3px solid black;
  margin-top: 40px;
`;

export const CurrentMoney = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  padding-left: 25px;
`;

export const CurrentMonthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CurrentMonth = styled.p`
  font-size: 24px;
  margin-top: 40px;
  padding-left: 25px;
`;

export const Callender = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 0px;
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

export const hr = styled.hr`
  width: 80%;
  border: 0.3px solid black;
  margin-top: 2px;
  margin-bottom: 5px;
  padding: 0;
`;

export const TargetBox = styled.p`
  border: 0.3px solid black;
  border-radius: 5px;
  color: #3572ef;
  padding: 3px;
  width: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
`;

export const TargetBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 50px;
`;

export const EditButton = styled.button`
  border: none;
  background-color: #3572ef;
  color: white;
  width: 100px;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 25px;
`;
