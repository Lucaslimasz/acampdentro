import Button from "../Button";
import * as S from "./styles";

import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <img src={Logo} alt="" width={100} />
        <ul>
          <li>Inicio</li>
          <li>Apresentação</li>
          <li>Calendário</li>
        </ul>
        <button>
          <span>Comprar</span> Ingresso
        </button>
      </S.Wrapper>
    </S.Container>
  );
}
