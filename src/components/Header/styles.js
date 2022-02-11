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

  ul {
    display: flex;
    li {
      color: #e1e1e6;
      padding: 0 1rem;
    }
  } 

  > button {
    background-image: url(${Bg});
    background-position: left bottom;
    color: #fff;
    border: none;

    padding: 0.875rem 1.625rem;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 0.25rem;

    cursor: pointer;
  }

  @media (max-width: 720px){
    ul {
      display: none;
    }

    button {
      span{
        display: none;
      }
    }
  }
`;
