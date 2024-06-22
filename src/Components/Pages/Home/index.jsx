import * as s from "./style";
import { useState } from "react";
import { ArrowRightWhiteSVG } from "../../../Assets/svgs";

function HomePage() {
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
          <s.HomeSliderContainer>
            <s.HomeSliderTextBox>
              <s.HomeSliderTitleText>전문 상담사와 상담하기</s.HomeSliderTitleText>
              <s.HomeSliderTitleButton>
                상담하기ㅤ
                <ArrowRightWhiteSVG />
              </s.HomeSliderTitleButton>
            </s.HomeSliderTextBox>
          </s.HomeSliderContainer>
          <s.NameOfWeekContainer>
            <s.NameOfWeekText>
              이번주는
              <br />
              <s.NameOfWeekTextHighlight>" 자연과 함께하는 주 "</s.NameOfWeekTextHighlight>
            </s.NameOfWeekText>
          </s.NameOfWeekContainer>
          <s.RecommendedMissionListContainer>
            <s.RecommendedMissionListText>추천 미션</s.RecommendedMissionListText>
          </s.RecommendedMissionListContainer>
          <s.RecommendedMissionListBox>
            <s.RecommendedMission>이어폰 없이 산책하기</s.RecommendedMission>
            <s.RecommendedMission>식물 기르기</s.RecommendedMission>
            <s.RecommendedMission>치킨 끊</s.RecommendedMission>
          </s.RecommendedMissionListBox>
          <s.hrline></s.hrline>
          <s.CurrentMonth>2024년 6월</s.CurrentMonth>
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
            {isSelectedFull && (
              <>
                <s.TodoContainer>
                  <s.TodoStatus>진행 중</s.TodoStatus>
                  <s.TodoName>인스타 안들어가기</s.TodoName>
                </s.TodoContainer>
                <s.hr />
                <s.TodoContainer>
                  <s.TodoStatus>완료</s.TodoStatus>
                  <s.TodoName>유튜브 안들어가기</s.TodoName>
                </s.TodoContainer>
              </>
            )}
            {isSelectedLight && (
              <>
                <s.TodoContainer>
                  <s.TodoStatus>진행 중</s.TodoStatus>
                  <s.TodoName>인스타 안들어가기</s.TodoName>
                </s.TodoContainer>
                <s.hr />
                <s.TodoContainer>
                  <s.TodoStatus>진행 중</s.TodoStatus>
                  <s.TodoName>유튜브 안들어가기</s.TodoName>
                </s.TodoContainer>
              </>
            )}
            {isSelectedNone && (
              <>
                <s.TodoContainer>
                  <s.TodoStatus>진행 중</s.TodoStatus>
                  <s.TodoName>목표를 설정하세요.</s.TodoName>
                </s.TodoContainer>
                <s.hr />
                <s.TodoContainer>
                  <s.TodoStatus>진행 중</s.TodoStatus>
                  <s.TodoName>목표를 설정하세요.</s.TodoName>
                </s.TodoContainer>
              </>
            )}
          </s.CallenderContainer>
        </s.AppContainer>
      </s.BackgroundContainer>
    </>
  );
}

export default HomePage;
