import { 
    ContainerWrap, 
    CurrentStep, 
    Steps, 
    Subtitle, 
    Title
} from './styles'
import { ProductComponent } from '../../elements/ProductComponent'

const Products = () => {
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
            <ProductComponent />
        </ContainerWrap>
    )    
}

export { Products }