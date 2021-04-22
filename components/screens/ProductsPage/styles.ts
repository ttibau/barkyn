import styled from 'styled-components';

export const ContainerWrap = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 50px;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 33px;
`;

export const Subtitle = styled.h3`
    color: #D3D3D3;
`

export const Steps = styled.div`
    height: 20px;
    width: 100%;
    border-radius: 20px;
    background-color: #DDDDDD;
`

interface ICurrentStepProps {
    step: string;
}

export const CurrentStep = styled.div<ICurrentStepProps>`
    background-color: #5F2FE1;
    width: ${({ step }) => step}%;
    height: 100%;
    border-radius: 20px;
`