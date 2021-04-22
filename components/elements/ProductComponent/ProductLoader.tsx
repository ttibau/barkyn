import React from "react"
import ContentLoader from "react-content-loader"

const ProductLoader = (props:any) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    uniqueKey="productLoader"
    {...props}
  >
    <rect x="17" y="16" rx="0" ry="0" width="246" height="25" /> 
    <rect x="20" y="56" rx="0" ry="0" width="133" height="23" /> 
    <rect x="24" y="94" rx="0" ry="0" width="225" height="11" /> 
    <rect x="25" y="115" rx="0" ry="0" width="223" height="13" /> 
    <rect x="24" y="136" rx="0" ry="0" width="222" height="13" /> 
    <rect x="26" y="156" rx="0" ry="0" width="55" height="22" /> 
    <rect x="36" y="156" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
)

export default ProductLoader 

