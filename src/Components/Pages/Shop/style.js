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
  justify-content: center;
  background-color: white;

  width: 600px;
  height: 100vh;

  font-size: 45px;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const ShopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: calc(100vh - 205px);
  width: 600px;
  margin-top: 120px;
  padding-left: 40px;
  gap: 30px;
  overflow: scroll;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const ShopCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

export const ShopCategoryTextBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;

export const ShopCategoryText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const ShopCategoryProductContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const ShopCategoryProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 5px;
  width: 60px;
  height: 60px;
`;

export const ShopCategoryProductDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 13px;
`;

export const ShopCategoryProductNameText = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const ShopCategoryProductPriceText = styled.p`
  font-size: 15px;
  margin: 0;
`;
