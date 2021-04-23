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

export const ProductName = styled.span`
    font-size: 18px;
    font-weight: bold;
`

export const ProductSelected = styled.div`
    display: flex;
    flex-direction: column;
`
export const PaymentDetails = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content:center;
    width: 80%;
    @media(max-width: 800px){
        width: unset;
    }
`

export const PaymentRow = styled.div`
    display: flex; 
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`

interface IPaymentDetailsLabel {
    total?: boolean;
}

export const PaymentDetailsLabel = styled.span<IPaymentDetailsLabel>`
    font-weight: ${({ total }) => total ? 'bold' : 'normal'};
    font-size: ${({ total }) => total ? '22px' : '16px'};
    margin: 8px 0;
`

export const GiftSection = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const CommonLabel = styled.span`
    color: #D3D3D3;
    margin-top: 10px
`

export const OrderSummary = styled.div`
    width: 30%;
    @media(max-width: 800px){
        width: unset;
    }
    display: flex; 
    flex-direction: column;
    align-items: center;
`

export const CurrentSection = styled.div`
    width: 70%;
`

export const SectionTitle = styled.h2`
    @media(max-width: 800px){
        margin-left: 50px;
    }
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
    width: 40%; 
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