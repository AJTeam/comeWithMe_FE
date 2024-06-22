import * as s from "./style";
import { ArrowRightSVG } from "../../../Assets/svgs";

function ProfilePage() {
  return (
    <>
      <s.BackgroundContainer>
        <s.AppContainer>
          <s.ShopContainer>
            <s.ShopCategoryContainer>
              <s.ShopCategoryTextBox>
                <s.ShopCategoryText>영양 및 식단 아이템</s.ShopCategoryText>
                <ArrowRightSVG />
              </s.ShopCategoryTextBox>
              <s.ShopCategoryProductContainer>
                <s.ShopCategoryProductImageContainer>
                  <img src="https://i.ibb.co/PrTPx2f/image-7.png" alt="DarkChocolate" />
                </s.ShopCategoryProductImageContainer>
                <s.ShopCategoryProductDescriptionContainer>
                  <s.ShopCategoryProductNameText>다크초콜릿</s.ShopCategoryProductNameText>
                  <s.ShopCategoryProductPriceText>3,000포인트</s.ShopCategoryProductPriceText>
                </s.ShopCategoryProductDescriptionContainer>
              </s.ShopCategoryProductContainer>
              <s.ShopCategoryProductContainer>
                <s.ShopCategoryProductImageContainer>
                  <img src="https://i.ibb.co/khB3YFy/image-6.png" alt="Coffee" />
                </s.ShopCategoryProductImageContainer>
                <s.ShopCategoryProductDescriptionContainer>
                  <s.ShopCategoryProductNameText>커피</s.ShopCategoryProductNameText>
                  <s.ShopCategoryProductPriceText>3,500포인트</s.ShopCategoryProductPriceText>
                </s.ShopCategoryProductDescriptionContainer>
              </s.ShopCategoryProductContainer>
            </s.ShopCategoryContainer>
            <s.ShopCategoryContainer>
              <s.ShopCategoryTextBox>
                <s.ShopCategoryText>디지털 콘텐츠</s.ShopCategoryText>
                <ArrowRightSVG />
              </s.ShopCategoryTextBox>
              <s.ShopCategoryProductContainer>
                <s.ShopCategoryProductImageContainer>
                  <img src="https://i.ibb.co/6g3Fygm/image-5.png" alt="FLO Logo" />
                </s.ShopCategoryProductImageContainer>
                <s.ShopCategoryProductDescriptionContainer>
                  <s.ShopCategoryProductNameText>FLO 1개월 구독권</s.ShopCategoryProductNameText>
                  <s.ShopCategoryProductPriceText>7,800포인트</s.ShopCategoryProductPriceText>
                </s.ShopCategoryProductDescriptionContainer>
              </s.ShopCategoryProductContainer>
              <s.ShopCategoryProductContainer>
                <s.ShopCategoryProductImageContainer>
                  <img src="https://i.ibb.co/x2NWbwp/image-4.png" alt="Apple Music Logo" />
                </s.ShopCategoryProductImageContainer>
                <s.ShopCategoryProductDescriptionContainer>
                  <s.ShopCategoryProductNameText>애플뮤직 1개월 구독권</s.ShopCategoryProductNameText>
                  <s.ShopCategoryProductPriceText>8,900포인트</s.ShopCategoryProductPriceText>
                </s.ShopCategoryProductDescriptionContainer>
              </s.ShopCategoryProductContainer>
            </s.ShopCategoryContainer>
            <s.ShopCategoryContainer>
              <s.ShopCategoryTextBox>
                <s.ShopCategoryText>취미 및 창의 활동 아이템</s.ShopCategoryText>
                <ArrowRightSVG />
              </s.ShopCategoryTextBox>
              <s.ShopCategoryProductContainer>
                <s.ShopCategoryProductImageContainer>
                  <img src="https://i.ibb.co/s3W7PWL/image-3.png" alt="Bag for Bowling Ball" />
                </s.ShopCategoryProductImageContainer>
                <s.ShopCategoryProductDescriptionContainer>
                  <s.ShopCategoryProductNameText>볼링 가방</s.ShopCategoryProductNameText>
                  <s.ShopCategoryProductPriceText>7,800포인트</s.ShopCategoryProductPriceText>
                </s.ShopCategoryProductDescriptionContainer>
              </s.ShopCategoryProductContainer>
              <s.ShopCategoryProductContainer>
                <s.ShopCategoryProductImageContainer>
                  <img src="https://i.ibb.co/ZHpfFK1/image-2.png" alt="Ball for Basketball" />
                </s.ShopCategoryProductImageContainer>
                <s.ShopCategoryProductDescriptionContainer>
                  <s.ShopCategoryProductNameText>농구공</s.ShopCategoryProductNameText>
                  <s.ShopCategoryProductPriceText>8,900포인트</s.ShopCategoryProductPriceText>
                </s.ShopCategoryProductDescriptionContainer>
              </s.ShopCategoryProductContainer>
            </s.ShopCategoryContainer>
          </s.ShopContainer>
        </s.AppContainer>
      </s.BackgroundContainer>
    </>
  );
}

export default ProfilePage;
