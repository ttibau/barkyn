import styled from 'styled-components'

export const BtnLabel = styled.span`
    font-weight: bold;
    color: #5F2FE1;
`


export const ButtonWrapper = styled.button`
    background-color: transparent;
    margin-top: 30px;
    border: 3px solid #5F2FE1;
    padding: 15px;
    display: flex;
    justify-content: center; 
    align-items: center; 
    border-radius: 7px;
    cursor: pointer;
    &:hover {
        background-color: #5F2FE1;
        ${BtnLabel} {
            color: #FFFFFF;
        }
    }
`
