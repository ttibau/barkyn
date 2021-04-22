import * as React from "react"

function CheckboxSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="prefix__svg-icon"
      viewBox="0 0 20 20"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M10.219 1.688c-4.471 0-8.094 3.623-8.094 8.094s3.623 8.094 8.094 8.094 8.094-3.623 8.094-8.094-3.624-8.094-8.094-8.094m0 15.334c-3.994 0-7.242-3.247-7.242-7.241a7.25 7.25 0 017.242-7.242c3.994 0 7.241 3.248 7.241 7.242a7.248 7.248 0 01-7.241 7.241m4.88-9.992a.425.425 0 00-.604.002L9.062 12.48l-2.269-2.277a.427.427 0 00-.605.603l2.573 2.578a.423.423 0 00.603 0L15.1 7.633a.426.426 0 00-.001-.603" />
    </svg>
  )
}

export default CheckboxSVG 
