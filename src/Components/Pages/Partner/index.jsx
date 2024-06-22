import * as s from "./style";
import { useState } from "react";
import TopNavbar from "../../Navbar_Top";
import { SmallPeopleSVG, PartnerActiveSVG, ArrowRightSVG } from "../../../Assets/svgs";

function PartnerPage() {
  const [isSelectedPartner, setIsSelectedPartner] = useState(false);
  const [selected, setSelected] = useState("Group");

  const handleSelectedPartner = () => {
    setIsSelectedPartner(true);
  };

  return (
    <>
      {isSelectedPartner === true && (
        <>
          <s.BackgroundContainer>
            <s.AppContainer>
              <TopNavbar />
              <s.ModalFirstContainer>
                <s.ModalFirstContainerSpacebetween>
                  <s.ModalFirstContainerTitleText>도파민에게서벗어나긔</s.ModalFirstContainerTitleText>
                  <s.ModalFirstContainerPopulationContainer>
                    <PartnerActiveSVG />
                    <s.ModalFirstContainerPopulationText>9 / 10</s.ModalFirstContainerPopulationText>
                  </s.ModalFirstContainerPopulationContainer>
                </s.ModalFirstContainerSpacebetween>
                <s.ModdalFirstContainerFlexStartContainer>
                  {" "}
                  <s.ModalFirstContainerDescText>같이 도파민 중독을 벗어나고 갓생 사실 분 구합니다</s.ModalFirstContainerDescText>
                </s.ModdalFirstContainerFlexStartContainer>
                <s.ModdalFirstContainerFlexStartContainer>
                  <s.ModalFirstConstainerStartChatButton>채팅하기</s.ModalFirstConstainerStartChatButton>
                </s.ModdalFirstContainerFlexStartContainer>
                <s.hr />
              </s.ModalFirstContainer>
              <s.ModalSecondContainer>
                <s.ModalSecondContainerTitleContainer>
                  <s.ModalSecondContainerTitleText>미션 공유</s.ModalSecondContainerTitleText>
                  <ArrowRightSVG />
                </s.ModalSecondContainerTitleContainer>
                <s.ModalSecondContainerTitleContainer>
                  <s.ModalSecondContainerDescText>서로 미션과 자료를 공유합니다.</s.ModalSecondContainerDescText>
                </s.ModalSecondContainerTitleContainer>
              </s.ModalSecondContainer>
              <s.ModalSecondBigContainer>
                도파민중독자긔윤님이 다음과 같은 미션을 공유합니다!
                <br />
                <br />
                <span style={{ "font-size": 20, "font-weight": "bold" }}>인스타 2시간만 하기</span>
              </s.ModalSecondBigContainer>
              <s.ModalSecondContainer>
                <s.ModalSecondContainerTitleContainer style={{ "margin-top": "20px" }}>
                  <s.ModalSecondContainerTitleText>피드백 주기</s.ModalSecondContainerTitleText>
                  <ArrowRightSVG />
                </s.ModalSecondContainerTitleContainer>
                <s.ModalSecondContainerTitleContainer>
                  <s.ModalSecondContainerDescText>그룹의 참여자들과 피드백을 주고받습니다.</s.ModalSecondContainerDescText>
                </s.ModalSecondContainerTitleContainer>
              </s.ModalSecondContainer>
              <s.ModalSecondBigContainer>
                <span style={{ "font-size": 20, "font-weight": "bold" }}>30분 말고 1시간으로 목표 시간을 늘리는건 어떤가요?</span>
              </s.ModalSecondBigContainer>
              <s.ModalSecondContainer>
                <s.ModalSecondContainerTitleContainer>
                  <s.ModalSecondContainerTitleText style={{ "margin-top": "20px" }}>응원의 한마디</s.ModalSecondContainerTitleText>
                  <ArrowRightSVG />
                </s.ModalSecondContainerTitleContainer>
                <s.ModalSecondContainerTitleContainer>
                  <s.ModalSecondContainerDescText>그룹의 참여자들에게 응원을 남길 수 있어요!</s.ModalSecondContainerDescText>
                </s.ModalSecondContainerTitleContainer>
              </s.ModalSecondContainer>
              <s.ModalSecondBigContainer>다들 숏츠보면 제가 쫒아감 ㄷㄷ</s.ModalSecondBigContainer>{" "}
            </s.AppContainer>
          </s.BackgroundContainer>
        </>
      )}
      {isSelectedPartner === false && (
        <s.BackgroundContainer>
          <s.AppContainer>
            <TopNavbar />
            <s.FindPartnerContainer>
              <s.FindPartnerTextContainer>
                <s.FindPartnerText>
                  <s.FindPartnerTextHighlight>이루고 싶은 목표가</s.FindPartnerTextHighlight> 있으신가요?
                  <br />
                  어울리는 <s.FindPartnerTextHighlight>파트너 그룹</s.FindPartnerTextHighlight>을 찾아보세요!
                </s.FindPartnerText>
              </s.FindPartnerTextContainer>
            </s.FindPartnerContainer>
            <s.FindPartnerListContainer>
              <s.FindPartnerBox>
                <s.FindPartnerBoxTitleText>도파민에서벗어나긔</s.FindPartnerBoxTitleText>
                <s.FindPartnerBoxDescriptionText>같이 도파민 중독을 벗어나고 갓생 사실 분 구합니다</s.FindPartnerBoxDescriptionText>
                <s.FindPartnerBoxBottomContainer>
                  <s.FindPartnerBoxCurrentPopulationContainer>
                    <SmallPeopleSVG />
                    <s.FindPartnerBoxCurrentPopulationText>8 / 10</s.FindPartnerBoxCurrentPopulationText>
                  </s.FindPartnerBoxCurrentPopulationContainer>
                  <s.FindPartnerBoxButton onClick={handleSelectedPartner}>가입 하기</s.FindPartnerBoxButton>
                </s.FindPartnerBoxBottomContainer>
              </s.FindPartnerBox>
            </s.FindPartnerListContainer>
            <s.FindPartnerListContainer>
              <s.FindPartnerBox>
                <s.FindPartnerBoxTitleText>숏츠보고십다</s.FindPartnerBoxTitleText>
                <s.FindPartnerBoxDescriptionText>저랑 숏츠의 유혹을 벗어나실 분 구합니다</s.FindPartnerBoxDescriptionText>
                <s.FindPartnerBoxBottomContainer>
                  <s.FindPartnerBoxCurrentPopulationContainer>
                    <SmallPeopleSVG />
                    <s.FindPartnerBoxCurrentPopulationText>6 / 10</s.FindPartnerBoxCurrentPopulationText>
                  </s.FindPartnerBoxCurrentPopulationContainer>
                  <s.FindPartnerBoxButton>가입 하기</s.FindPartnerBoxButton>
                </s.FindPartnerBoxBottomContainer>
              </s.FindPartnerBox>
            </s.FindPartnerListContainer>
            <s.FindPartnerListContainer>
              <s.FindPartnerBox>
                <s.FindPartnerBoxTitleText>집보내주세요</s.FindPartnerBoxTitleText>
                <s.FindPartnerBoxDescriptionText>집.............,보내주세요</s.FindPartnerBoxDescriptionText>
                <s.FindPartnerBoxBottomContainer>
                  <s.FindPartnerBoxCurrentPopulationContainer>
                    <SmallPeopleSVG />
                    <s.FindPartnerBoxCurrentPopulationText>8 / 15</s.FindPartnerBoxCurrentPopulationText>
                  </s.FindPartnerBoxCurrentPopulationContainer>
                  <s.FindPartnerBoxButton>가입 하기</s.FindPartnerBoxButton>
                </s.FindPartnerBoxBottomContainer>
              </s.FindPartnerBox>
            </s.FindPartnerListContainer>
            <s.FindPartnerListContainer>
              <s.FindPartnerBox>
                <s.FindPartnerBoxTitleText>육준성 육성계획</s.FindPartnerBoxTitleText>
                <s.FindPartnerBoxDescriptionText>도파민 이겨내실분</s.FindPartnerBoxDescriptionText>
                <s.FindPartnerBoxBottomContainer>
                  <s.FindPartnerBoxCurrentPopulationContainer>
                    <SmallPeopleSVG />
                    <s.FindPartnerBoxCurrentPopulationText>9 / 10</s.FindPartnerBoxCurrentPopulationText>
                  </s.FindPartnerBoxCurrentPopulationContainer>
                  <s.FindPartnerBoxButton>가입 하기</s.FindPartnerBoxButton>
                </s.FindPartnerBoxBottomContainer>
              </s.FindPartnerBox>
            </s.FindPartnerListContainer>
          </s.AppContainer>
        </s.BackgroundContainer>
      )}
    </>
  );
}

export default PartnerPage;
