import * as S from "./styles";

import Header from "../components/Header";
import Calendar from "../components/Calendar";
import Button from "../components/Button";

import VideoAcamp from "../assets/video-acamp.mp4";
import Illustration from "../assets/illustration.png";

function App() {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <h2>AcampDentro</h2>
        <h1>
          Uma conferência que você não pode perder. <b>O tempo é agora!</b>
        </h1>
        <p>
          Uma conferência pra quem é filho! Pra quem busca e anseia por um
          crescimento espiritual.
        </p>
        <video src={VideoAcamp} autoPlay loop muted preload="metadata"></video>

        <S.Calendar>
          <div className="effect" />
          <h2>A programação será do dia 28/FEV à 02/MAR</h2>
          <Calendar />
        </S.Calendar>
      </S.Wrapper>
      <S.Informations>
        <S.Wrapper>
          <img src={Illustration} alt="illustration"   />
          <div>
            <h1>
              Você não pode perder por esse <b>momento</b>!
            </h1>
            <p>Faça agora a sua inscrição.</p>
            <Button />
          </div>
        </S.Wrapper>
      </S.Informations>
    </S.Container>
  );
}

export default App;
