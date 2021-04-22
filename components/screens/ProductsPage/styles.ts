import styled from 'styled-components';

export const Header = styled.div`
   @media(max-width: 800px) {
      padding: 50px;
    } 
`

export const AnimationContainer = styled.div`
    display: flex; 
    flex-direction: row;
    width: 30%; 
    align-items: center;
    margin-bottom: 30px;
`

export const LabelsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProductsList = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    @media(max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ContainerWrap = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 50px;
    @media(max-width: 800px) {
      padding: 0px;
    }
`;

export const Title = styled.h1`
    font-weight: bold;
    margin:0px;
    font-size: 33px;
`;
     

export const Subtitle = styled.h3`
    color: #D3D3D3;
    margin:0px;
`

export const Steps = styled.div`
    height: 10px;
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