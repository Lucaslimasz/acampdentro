import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root{
    --light: #fff;
    --dark: #09090A;
    
    --grey-400: #a8a8b3;
    --grey-100: #29292e;

    --background: #121214;
    
    --purple: #9466FF;
    --green: #60e588;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  
  body {
    font-family: Roboto, sans-serif;
    background: var(--background);
    color: var(--light);
  }
  
  button {
    cursor: pointer;
  }
  
  button, input {
    border: 0;
    outline: 0;
  }

  @media (max-width: 1000px){
    html{
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }
`;
