import { 
    ContainerWrap, 
    CurrentStep, 
    Steps, 
    Subtitle, 
    Title, 
    AnimationContainer,
    LabelsContainer, 
    Header,
    StepsContainer, 
    CurrentStepLabel,
    SectionTitle
} from './styles'
import animationData from '../../../assets/shiping.json';
import Lottie from 'react-lottie';

const CheckoutPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    return (
        <ContainerWrap>
            <Header>
                <AnimationContainer>
                    <Lottie 
                        options={defaultOptions}
                        height={100}
                        width={100}
                    />
                    <LabelsContainer>
                        <Title>
                            Simple, transparent pricing
                        </Title>
                        <Subtitle>
                            No surprise fees.
                        </Subtitle>
                    </LabelsContainer>
                </AnimationContainer>
                <StepsContainer>
                    <Steps>
                        <CurrentStep step="66"/>
                    </Steps>
                    <CurrentStepLabel>Shipping Address (2/3)</CurrentStepLabel>
                </StepsContainer> 
            </Header>

            <SectionTitle>
                Shipping Details
            </SectionTitle>
           
        </ContainerWrap>
    )    
}

export { CheckoutPage }