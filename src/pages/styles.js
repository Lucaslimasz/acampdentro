import styled from "styled-components";

import Background from "../assets/bg.png";

export const Container = styled.div`
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-bottom: 1px solid #29292e;
  width: 100%;
  height: 85vh;

  @media (max-width: 990px){
    height: 800px;
  }

  @media (max-width: 770px){
    height: 700px;
  }
  @media (max-width: 600px){
    height: 650px;
  }
`;

export const Wrapper = styled.div`
  max-width: 71rem;
  margin: auto;
  padding: 1.625rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 3rem;
    max-width: 50rem;
    margin: 1.25rem 0 1.75rem;
    b {
      color: var(--green);
    }
  }

  > h2 {
    font-size: 3.5rem;
    margin-top: 5rem;
    color: var(--green);
  }

  > p {
    max-width: 30rem;
  }

  video {
    width: 70rem;
    padding: 0 1.625rem;
    transform: translateY(15%);
  }

  @media (max-width: 1200px) {
    video {
      width: 105%;
    }
  }
`;

export const Calendar = styled.div`
  padding: 10rem 0 5rem;

  .effect {
    background: linear-gradient(180deg, var(--green), rgba(153, 109, 255, 0));
    width: 1.5px;
    height: 5rem;
    margin: auto;
  }

  > h2 {
    color: var(--light);
    font-size: 2.5rem;
    margin-top: 2.5rem;
  }
`;

export const Informations = styled.div`
  background: #0d0d0f;
  border-top: 1px solid #27272c;
  border-bottom: 1px solid #27272c;
  padding: 0 30px;

  img {
    width: 400px;
    margin: auto;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 6rem 0;

    button {
      max-width: 15.625rem;
      font-size: 1rem;
      padding: 1.375rem 0;
      margin-top: 36px;
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        b {
          color: var(--green);
        }
      }
    }
  }

  @media (max-width: 920px) {
    img {
      width: 300px;
    }
  }

  @media (max-width: 720px) {
    img {
      width: 250px;
    }
  }

  @media (max-width: 620px) {
    > div {
      display: flex;
    }
  }
`;
