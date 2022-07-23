import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #41295a;
    background: -webkit-linear-gradient(to right, #2F0743, #41295a);
    background: linear-gradient(to right, #2F0743, #41295a);
    font-family: 'Poppins', sans-serif;
  }

  main{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  }
`