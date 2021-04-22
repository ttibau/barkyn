import CheckboxSVG from "components/svg/Checkbox"
import Tag from "components/svg/Tag"
import { 
    ProductAction, 
    ProductName, 
    ProductWrap, 
    ProductContainer, 
    ProductPrice, 
    ProductDescription, 
    AdjectiveRow, 
    ProductPriceContainer, 
    ProductPricePeriod,
    ProductAdjective,
    BtnLabel,
    ProductAdjectivesSection,
    ProductAdjectiveRow
} from "./styles"

interface IProductComponent {
    product: IProduct
}

export const ProductComponent = ({ product } : IProductComponent) => {
    return (
        <ProductContainer>
            <ProductWrap>
                <ProductName>
                    {product.name}
                </ProductName>
                <ProductPriceContainer>
                    <ProductPrice>
                        ${product.price}
                    </ProductPrice>
                    <ProductPricePeriod>
                        /Month
                    </ProductPricePeriod>
                </ProductPriceContainer>
                <ProductDescription>
                    {product.description}
                </ProductDescription>
                <AdjectiveRow>
                        <ProductAdjectivesSection>
                            {product.adjectives.map((adjective, index) => (
                                <ProductAdjectiveRow key={index}>
                                    <CheckboxSVG fill="#A98DFC" />
                                    <ProductAdjective> 
                                        {adjective}
                                    </ProductAdjective>
                                </ProductAdjectiveRow>
                            ))}
                        </ProductAdjectivesSection>
                </AdjectiveRow>
            </ProductWrap>
            <ProductAction>
                <BtnLabel>
                    Choose Product
                </BtnLabel>
            </ProductAction>
        </ProductContainer>
    )
}