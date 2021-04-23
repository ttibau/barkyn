
import styled from 'styled-components';

export const Input = styled.input`
    font-size: 18px;
    border: 1px solid #5F2FE1;
    padding: 10px;
    background-color: transparent;
`;

export const ErorrHandler = styled.span`
  position: absolute;
  font-weight: bold;
  margin-top: 65px;
  color: red;
`

export const Line = styled.div`
  border: 1px #d3d3d3 solid;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  margin: 20px 0px;
`;