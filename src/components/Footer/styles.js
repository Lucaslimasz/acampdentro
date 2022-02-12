import styled from "styled-components";

import Bg from "../../assets/bg.png";

export const Container = styled.header`
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 71rem;
  margin: auto;
  padding: 1.625rem;
`;
