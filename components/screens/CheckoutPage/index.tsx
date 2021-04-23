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
    InputWraper,
    GiftSection,
    CommonLabel,
    ProductSelected,
    PaymentDetails,
    PaymentRow,
    PaymentDetailsLabel
} from './styles'
import animationData from '../../../assets/shiping.json';
import Lottie from 'react-lottie';
import { useForm } from 'react-hook-form';
import { InputComponent } from 'components/elements/InputComponent';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonComponent } from 'components/elements/ButtonComponent';
import DogSVG from 'components/svg/dog';


const CheckoutPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    const schema = Yup.object().shape({ 
        name: Yup.string().required('This field is required'),
        email: Yup.string().email().required('This field is required'),
        address: Yup.string().required('This field is required'),
        postal_code: Yup.string().required('This field is required'),
        country: Yup.string().required('This field is required'),
        phone: Yup.string().required('This field is required'),
    })

    const {register,  handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);


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
           <Content>
                <CurrentSection>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <InputWraper>
                            <InputComponent 
                                label="Name"
                                type="text"
                                {...register(`name`, { required: true })}
                                error={errors.name ? errors.name.message : undefined}
                            />
                            <InputComponent 
                                label="E-mail"
                                type="text"
                                {...register(`email`, { required: true })}
                                error={errors.email ? errors.email.message : undefined}
                            />
                        </InputWraper>
                        <InputComponent 
                            label="Address"
                            type="text"
                            {...register(`address`, { required: true })}
                            error={errors.address ? errors.address.message : undefined}
                        />
                        <InputComponent 
                            label="Postal code"
                            type="text"
                            {...register(`postal_code`, { required: true })}
                            error={errors.postal_code ? errors.postal_code.message : undefined}
                        />
                        <InputComponent 
                            label="Country"
                            type="text"
                            {...register(`country`, { required: true })}
                            error={errors.country ? errors.country.message : undefined}
                        />
                        <InputComponent 
                            label="Phone"
                            type="text"
                            {...register(`phone`, { required: true })}
                            error={errors.phone ? errors.phone.message : undefined}
                        />
                        <ButtonComponent label="Next" />
                    </form>
                </CurrentSection>
                <OrderSummary>
                    <SectionTitle>Order Summary</SectionTitle>
                    <DogSVG />
                    <ProductSelected>
                        Handcrafted Cotton Computer
                        $883.00
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