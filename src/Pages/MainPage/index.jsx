import * as s from "./style";
import Navbar from "../../Components/Navbar";

function MainPage() {
  return (
    <>
      <s.BackgroundContainer>
        <s.AppContainer>
          <Navbar />
        </s.AppContainer>
      </s.BackgroundContainer>
    </>
  );
}

export default MainPage;
