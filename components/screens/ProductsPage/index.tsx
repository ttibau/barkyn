import { 
    ContainerWrap, 
    CurrentStep, 
    ProductsList, 
    Steps, 
    Subtitle, 
    Title, 
    AnimationContainer,
    LabelsContainer, 
    Header, 
    StepsContainer,
    CurrentStepLabel
} from './styles'
import { ProductComponent } from '../../elements/ProductComponent'
import { useFetchProducts } from 'queries/useFetchProducts'
import ProductLoader  from '../../elements/ProductComponent/ProductLoader';
import animationData from '../../../assets/product.json';
import Lottie from 'react-lottie';

const Products = () => {
    const productsQuery = useFetchProducts();
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
                        <CurrentStep step="33"/>
                    </Steps>
                    <CurrentStepLabel>Select Product (1/3)</CurrentStepLabel>
                </StepsContainer>
            </Header>
            {productsQuery.status === 'loading' &&
                <ProductLoader />
            }
            <ProductsList>
                {productsQuery.data?.map((product, index) => (
                    <ProductComponent product={product} key={index} />
                ))}
            </ProductsList>
        </ContainerWrap>
    )    
}

export { Products }