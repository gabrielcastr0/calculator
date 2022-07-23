import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LedArea = styled.div`
  height: 5rem;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: .75rem;
  word-wrap: break-word;
  word-break: break-all;
`;

export const Led = styled.div`
  color: #fff;
  font-size: 1.5rem;
`;

export const ButtonsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(4, 6rem);

  button{
    font-size: 1.5625rem;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
  }
  
  .ac{
    grid-column: span 2;
  }

  .del{
    grid-column: span 2;
  }
`; 