import * as s from "./style";
import { useState } from "react";
import { CurrentMoodSVG } from "../../../Assets/svgs";

function ProfilePage() {
  const [isSelectedFull, setIsSelectedFull] = useState(true);
  const [isSelectedLight, setIsSelectedLight] = useState(false);
  const [isSelectedNone, setIsSelectedNone] = useState(false);

  const handleSelectedFull = () => {
    setIsSelectedFull(true);
    setIsSelectedLight(false);
    setIsSelectedNone(false);
  };

  const handleSelectedLight = () => {
    setIsSelectedFull(false);
    setIsSelectedLight(true);
    setIsSelectedNone(false);
  };

  const handleSelectedNone = () => {
    setIsSelectedFull(false);
    setIsSelectedLight(false);
    setIsSelectedNone(true);
  };

  return (
    <>
      <s.BackgroundContainer>
        <s.AppContainer>
          <s.MyProfileContainer>
            <s.MyProfilePicAndNameContainer>
              <img src="https://i.ibb.co/2Prb2nL/profile.png" alt="profile" style={{ width: "60px", height: "60px", "border-radius": "50%" }} />
              <s.ProfileNameContainer>
                <s.ProfileNameText>ilovedopamin</s.ProfileNameText>
                <s.ProfileCurrentMessage>도파민 중독자</s.ProfileCurrentMessage>
              </s.ProfileNameContainer>
            </s.MyProfilePicAndNameContainer>
            <s.MyProfileCurrentMoodContainer>
              <CurrentMoodSVG />
            </s.MyProfileCurrentMoodContainer>
          </s.MyProfileContainer>
          <s.CurrentMoney>보유중인 포인트 : 3200P </s.CurrentMoney>
          <s.CurrentMonthContainer>
            <s.CurrentMonth>2024년 6월</s.CurrentMonth>
            <s.CurrentMonthHr />
          </s.CurrentMonthContainer>
          <s.CallenderContainer>
            <s.Callender>
              <s.CallenderDateBox>
                <s.CallenderText>6월</s.CallenderText>
                <s.CallenderDateFull onClick={handleSelectedFull}></s.CallenderDateFull>
                <s.CallenderText>23일</s.CallenderText>
              </s.CallenderDateBox>
              <s.CallenderDateBox>
                <s.CallenderText>6월</s.CallenderText>
                <s.CallenderDateLight onClick={handleSelectedLight}></s.CallenderDateLight>
                <s.CallenderText>24일</s.CallenderText>
              </s.CallenderDateBox>
              <s.CallenderDateBox>
                <s.CallenderText>6월</s.CallenderText>
                <s.CallenderDateNone onClick={handleSelectedNone}></s.CallenderDateNone>
                <s.CallenderText>25일</s.CallenderText>
              </s.CallenderDateBox>
              <s.CallenderDateBox>
                <s.CallenderText>6월</s.CallenderText>
                <s.CallenderDateNone onClick={handleSelectedNone}></s.CallenderDateNone>
                <s.CallenderText>26일</s.CallenderText>
              </s.CallenderDateBox>
              <s.CallenderDateBox>
                <s.CallenderText>6월</s.CallenderText>
                <s.CallenderDateNone onClick={handleSelectedNone}></s.CallenderDateNone>
                <s.CallenderText>27일</s.CallenderText>
              </s.CallenderDateBox>
              <s.CallenderDateBox>
                <s.CallenderText>6월</s.CallenderText>
                <s.CallenderDateNone onClick={handleSelectedNone}></s.CallenderDateNone>
                <s.CallenderText>28일</s.CallenderText>
              </s.CallenderDateBox>
              <s.CallenderDateBox>
                <s.CallenderText>6월</s.CallenderText>
                <s.CallenderDateNone onClick={handleSelectedNone}></s.CallenderDateNone>
                <s.CallenderText>29일</s.CallenderText>
              </s.CallenderDateBox>
            </s.Callender>
          </s.CallenderContainer>
          <s.TargetBoxContainer>
            <s.TargetBox>목표 1</s.TargetBox>
          </s.TargetBoxContainer>
          {isSelectedFull && (
            <>
              <s.TodoContainer>
                <s.TodoStatus>성공!</s.TodoStatus>
                <s.TodoName>인스타 안들어가기</s.TodoName>
              </s.TodoContainer>
              <s.hr />
              <s.TodoContainer>
                <s.TodoStatus>성공!</s.TodoStatus>
                <s.TodoName>유튜브 안들어가기</s.TodoName>
              </s.TodoContainer>
            </>
          )}
          {isSelectedLight && (
            <>
              <s.TodoContainer>
                <s.TodoStatus>성공!</s.TodoStatus>
                <s.TodoName>인스타 안들어가기</s.TodoName>
              </s.TodoContainer>
              <s.hr />
              <s.TodoContainer>
                <s.TodoStatus>실패!</s.TodoStatus>
                <s.TodoName>유튜브 안들어가기</s.TodoName>
              </s.TodoContainer>
            </>
          )}
          {isSelectedNone && (
            <>
              <s.TodoContainer>
                <s.TodoStatus>진행 중</s.TodoStatus>
                <s.TodoName>주제를 입력해주세요.</s.TodoName>
              </s.TodoContainer>
              <s.hr />
              <s.TodoContainer>
                <s.TodoStatus>진행 중</s.TodoStatus>
                <s.TodoName>주제를 입력해주세요.</s.TodoName>
              </s.TodoContainer>
            </>
          )}
          <s.TargetBoxContainer>
            <s.TargetBox>목표 2</s.TargetBox>
          </s.TargetBoxContainer>
          {isSelectedFull && (
            <>
              <s.TodoContainer>
                <s.TodoStatus>성공!</s.TodoStatus>
                <s.TodoName>인스타 안들어가기</s.TodoName>
              </s.TodoContainer>
              <s.hr />
              <s.TodoContainer>
                <s.TodoStatus>성공!</s.TodoStatus>
                <s.TodoName>유튜브 안들어가기</s.TodoName>
              </s.TodoContainer>
            </>
          )}
          {isSelectedLight && (
            <>
              <s.TodoContainer>
                <s.TodoStatus>성공!</s.TodoStatus>
                <s.TodoName>인스타 안들어가기</s.TodoName>
              </s.TodoContainer>
              <s.hr />
              <s.TodoContainer>
                <s.TodoStatus>실패!</s.TodoStatus>
                <s.TodoName>유튜브 안들어가기</s.TodoName>
              </s.TodoContainer>
            </>
          )}
          {isSelectedNone && (
            <>
              <s.TodoContainer>
                <s.TodoStatus>진행 중</s.TodoStatus>
                <s.TodoName>주제를 입력해주세요.</s.TodoName>
              </s.TodoContainer>
              <s.hr />
              <s.TodoContainer>
                <s.TodoStatus>진행 중</s.TodoStatus>
                <s.TodoName>주제를 입력해주세요.</s.TodoName>
              </s.TodoContainer>
            </>
          )}
          <s.TargetBoxContainer>
            <s.TargetBox>목표 3</s.TargetBox>
          </s.TargetBoxContainer>
          {isSelectedFull && (
            <>
              <s.TodoContainer>
                <s.TodoStatus>성공!</s.TodoStatus>
                <s.TodoName>인스타 안들어가기</s.TodoName>
              </s.TodoContainer>
              <s.hr />
              <s.TodoContainer>
                <s.TodoStatus>성공!</s.TodoStatus>
                <s.TodoName>유튜브 안들어가기</s.TodoName>
              </s.TodoContainer>
            </>
          )}
          {isSelectedLight && (
            <>
              <s.TodoContainer>
                <s.TodoStatus>성공!</s.TodoStatus>
                <s.TodoName>인스타 안들어가기</s.TodoName>
              </s.TodoContainer>
              <s.hr />
              <s.TodoContainer>
                <s.TodoStatus>실패!</s.TodoStatus>
                <s.TodoName>유튜브 안들어가기</s.TodoName>
              </s.TodoContainer>
            </>
          )}
          {isSelectedNone && (
            <>
              <s.TodoContainer>
                <s.TodoStatus>진행 중</s.TodoStatus>
                <s.TodoName>주제를 입력해주세요.</s.TodoName>
              </s.TodoContainer>
              <s.hr />
              <s.TodoContainer>
                <s.TodoStatus>진행 중</s.TodoStatus>
                <s.TodoName>주제를 입력해주세요.</s.TodoName>
              </s.TodoContainer>
            </>
          )}
          <s.EditButton>수정하기</s.EditButton>
        </s.AppContainer>
      </s.BackgroundContainer>
    </>
  );
}

export default ProfilePage;
