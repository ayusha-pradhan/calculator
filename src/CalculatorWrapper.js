import styled from 'styled-components';

const CalculatorStyled = styled.div`

  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;

.input{
  grid-column: 1 / 5;
  height: 40px;
 background-color: #000;
  outline: 1px solid #888;
  color: #fff;
  padding: 0.5em;
  font-weight: bold;
  font-size: 1.4em;
  align-items: center;
   outline: 1px solid #888;
  padding:20px;
  text-align: right;
}

.clear-btn{
  grid-column: 1 /5;
   height: 40px;
  background-color: #c5c3cd;
  color: #fff;
  padding: 0.5em;
  font-size: 1.4em;
  align-items: center;
  outline: 1px solid #888;
}
`;

export default CalculatorStyled;
