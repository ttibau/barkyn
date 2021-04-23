import styled from 'styled-components'

export const BtnLabel = styled.span`
    font-weight: bold;
    color: #5F2FE1;
`

interface IButtonWrapperProps {
    btnType?: string;
}

export const ButtonWrapper = styled.button<IButtonWrapperProps>`
    background-color: transparent;
    border: 3px solid #5F2FE1;
    padding: ${({ btnType }) => btnType === 'small' ? '11px' : '15px'};
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
