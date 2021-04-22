import { 
    ContainerWrap, 
    CurrentStep, 
    ProductsList, 
    Steps, 
    Subtitle, 
    Title
} from './styles'
import { ProductComponent } from '../../elements/ProductComponent'
import { useFetchProducts } from 'queries/useFetchProducts'
import ProductLoader  from '../../elements/ProductComponent/ProductLoader';

const Products = () => {
    const productsQuery = useFetchProducts();

    console.log('%c⧭', 'color: #00e600', productsQuery);
    return (
        <ContainerWrap>
            <Title>
                Simple, transparent pricing
            </Title>
            <Subtitle>
                No surprise fees.
            </Subtitle>
            <Steps>
                <CurrentStep step="30"/>
            </Steps>
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