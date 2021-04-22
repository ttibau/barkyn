import styled from 'styled-components';

export const ProductAdjectiveRow = styled.div`
    display: flex; 
    flex-direction: row;
    margin: 5px;
`

export const ProductAdjectivesSection = styled.div`
    display: flex; 
    flex-direction: column;
`

export const ProductAdjective = styled.span`
    margin-left: 10px;
    color: #5F2FE1;
`

export const ProductPriceContainer = styled.div`
    display: flex;
    flex-direction: row; 
`

export const ProductPricePeriod = styled.h4`
    color: #d3d3d3;
`

export const ProductDescription = styled.span`
    color: #cecedc;
`

export const AdjectiveRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`

export const ProductName = styled.h2`

`

export const ProductPrice = styled.h3`
    font-weight: bold;
`

export const ProductWrap = styled.div`
    display: flex;
    border-radius: 7px;
    padding: 15px;
    margin: 20px;
    flex-direction: column;
    &:hover {
       background-color:  #5F2FE1;
        ${ProductName} {
            color: #FFFFFF;
        }
        ${ProductPrice} {
            color: #FFFFFF;
        }
        ${ProductAdjective} {
            color: #FFFFFF;
        }
    } 

`

export const BtnLabel = styled.span`
    font-weight: bold;
    color: #5F2FE1;
`

export const ProductAction = styled.button`
    background-color: transparent;
    border: 3px solid #5F2FE1;
    padding: 15px;
    display: flex;
    justify-content: center; 
    align-items: center; 
    border-radius: 7px;
    cursor: pointer;
    &:hover {
        background-color: #5F2FE1;
        ${BtnLabel} {
            color: #FFFFFF;
        }
    }
`


export const ProductContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`