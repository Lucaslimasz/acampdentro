import { useState } from "react";

import NumberOne from '../../assets/icon-1.svg';
import NumberTwo from '../../assets/icon-2.svg';
import NumberThree from '../../assets/icon-3.svg';

import * as S from "./styles";

export default function Calendar() {
  const [dateNumber, setDateNumber] = useState(1);

  const handleDateNumber = (numberPage) => {
    setDateNumber(numberPage);
  };

  return (
    <S.Container numberSelected={dateNumber}>
      <header>
        <div onClick={() => handleDateNumber(1)}>
          <span />
          <p>Segunda-Feira</p>
        </div>
        <div onClick={() => handleDateNumber(2)}>
          <span />
          <p>Terça-Feira</p>
        </div>
        <div onClick={() => handleDateNumber(3)}>
          <span />
          <p>Quarta-Feira</p>
        </div>
      </header>
      {dateNumber === 1 && (
        <div>
          <img src={NumberOne} alt="" />
          <ul>
            <li>Horário: 19h30 - Pr. Raimundo Nonato</li>
          </ul>
        </div>
      )}
      {dateNumber === 2 && (
        <div>
          <img src={NumberTwo} alt="" />
          <ul>
            <li>Horário: 16h - Pra. Irany</li>
            <li>Horário: 19h30 - Pr. Raimundo Nonato</li>
          </ul>
        </div>
      )}
      {dateNumber === 3 && (
        <div>
          <img src={NumberThree} alt="" />
          <ul>
            <li>Horário: 16h - Pra. Maria de Jesus</li>
            <li>Horário: 19h30 - Pr. Raimundo Nonato</li>
          </ul>
        </div>
      )}
    </S.Container>
  );
}
