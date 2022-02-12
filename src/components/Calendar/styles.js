import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  width: 900px;

  header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    div {
      background: var(--dark);
      color: var(--grey-400);
      border: 1px solid var(--grey-100);
      padding: 0.75rem 0;

      cursor: pointer;
      position: relative;

      ${({ numberSelected }) => css`
        &:nth-child(${numberSelected}) {
          background: #202024;
          span {
            width: 100%;
            height: 3px;
            background: var(--green);
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      `}
    }
  }

  > div {
    padding: 56px 72px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid #29292e;

    img {
      height: 350px;
    }

    ul {
      li {
        padding: 15px 0;
        text-align: left;
      }
    }
  }

  @media (max-width: 960px){
    width: 100%;
  }

  @media (max-width: 700px){
    img {
      display: none;
    }

    >div {
      grid-template-columns: 1fr;
    }
  }
`;
