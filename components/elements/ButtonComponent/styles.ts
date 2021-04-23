import styled from 'styled-components'

interface IBtnLabelProps {
    active?: boolean;
}

export const BtnLabel = styled.span<IBtnLabelProps>`
    font-weight: bold;
    color: ${({ active }) => active ? '#FFFFFF' : '#5F2FE1'};
`

interface IButtonWrapperProps {
    btnType?: string;
    active?: boolean;
}

export const ButtonWrapper = styled.button<IButtonWrapperProps>`
    background-color: ${({ active }) => active ? '#5F2FE1' : 'transparent'};
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
