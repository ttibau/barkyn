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
    BtnLabel
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
                    <Tag color="red" />
                    <ProductAdjective>
                        {product.adjective}
                    </ProductAdjective>
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