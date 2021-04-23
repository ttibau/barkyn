import styled from 'styled-components';

export const Content = styled.div`
    display: flex; 
    flex-direction: row;
    width: 100%;
    height: 100%;

    @media(max-width: 800px) {
      flex-direction: column;
      align-items: center;
    } 
`
 
export const InputWraper = styled.div`
    display: flex; 
    margin:0px;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    @media(max-width: 800px) {
      flex-direction: column;
    };
`

export const OrderSummary = styled.div`
    width: 30%;
`

export const CurrentSection = styled.div`
    width: 70%;
`

export const SectionTitle = styled.h1`
    
`

export const CurrentStepLabel = styled.span`
    color: #D3D3D3;
    margin-top: 10px;
`

export const StepsContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

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