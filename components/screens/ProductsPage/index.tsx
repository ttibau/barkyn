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

const Products = () => {
    const productsQuery = useFetchProducts();

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
            <ProductsList>
                {productsQuery.data?.map((product, index) => (
                    <ProductComponent product={product} key={index} />
                ))}
            </ProductsList>
        </ContainerWrap>
    )    
}

export { Products }