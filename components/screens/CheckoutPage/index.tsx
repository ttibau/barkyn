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
    SectionTitle,
    Content,
    CurrentSection,
    OrderSummary,
    GiftSection,
    CommonLabel,
    ProductSelected,
    PaymentDetails,
    PaymentRow,
    PaymentDetailsLabel,
} from './styles'
import animationData from '../../../assets/shiping.json';
import Lottie from 'react-lottie';
import { InputComponent } from 'components/elements/InputComponent';
import { ButtonComponent } from 'components/elements/ButtonComponent';
import DogSVG from 'components/svg/dog';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { asyncLocalStorage } from 'utils/asyncLocalStorage';
import { ShippingForm } from '../../forms/ShippingForm/ShippingForm';


const CheckoutPage = () => {
    const [product, setProduct] = useState<IProduct>();
    const [section, setSection] = useState<string>('shipping');

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    const router = useRouter();

    useEffect(() => {
        const getSelectedProduct = async () => {
            let selectedProduct = await asyncLocalStorage.getItem('selectedProduct')
            if(selectedProduct)
                setProduct(JSON.parse(selectedProduct))
        }
        getSelectedProduct();
    }, [])

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
                        <CurrentStep step={ section === 'shipping' ? '66' : '100'}/>
                    </Steps>
                    <CurrentStepLabel>
                        {section === 'shipping' &&
                            'Shipping Address (2/3)'
                        } 
                        {section === 'payment' &&
                            'Payment (3/3)'
                        }
                    </CurrentStepLabel>
                </StepsContainer> 
            </Header>

            <SectionTitle>
                {section === 'shipping' &&
                    'Shipping Details'
                }
                {section === 'payment' &&
                    'Payment Details'
                }
            </SectionTitle>
           <Content>
                <CurrentSection>
                    {section === 'shipping' &&
                       <ShippingForm submit={() => setSection('payment')}/> 
                    }
                </CurrentSection>
                <OrderSummary>
                    <SectionTitle>Order Summary</SectionTitle>
                    <DogSVG />
                    <ProductSelected>
                        {product?.name}
                        ${product?.price}
                    </ProductSelected>
                    <CommonLabel>Gift card/Discount code</CommonLabel>
                    <GiftSection>
                        <InputComponent 
                            placeholder="Gift card"
                        />
                        <ButtonComponent label="Go!" btnType="small" />
                    </GiftSection>
                    <PaymentDetails>
                        <PaymentRow>
                           <PaymentDetailsLabel>Subtotal</PaymentDetailsLabel> 
                           <PaymentDetailsLabel>$19.00</PaymentDetailsLabel>
                        </PaymentRow>
                        <PaymentRow>
                           <PaymentDetailsLabel>Tax</PaymentDetailsLabel> 
                           <PaymentDetailsLabel>$19.00</PaymentDetailsLabel>
                        </PaymentRow>
                        <PaymentRow>
                           <PaymentDetailsLabel>Shipping</PaymentDetailsLabel> 
                           <PaymentDetailsLabel>$19.00</PaymentDetailsLabel>
                        </PaymentRow>
                        <PaymentRow>
                           <PaymentDetailsLabel total>Total</PaymentDetailsLabel> 
                           <PaymentDetailsLabel total>$19.00</PaymentDetailsLabel>
                        </PaymentRow>
                    </PaymentDetails>
                </OrderSummary>
           </Content>
        </ContainerWrap>
    )    
}

export { CheckoutPage }