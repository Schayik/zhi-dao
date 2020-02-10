import React from "react"

function SvgComponent(props) {
  return (
    <svg width="1em" height="1em" viewBox="-2 -2 64 64" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#EA4045"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        transform="translate(0 8)"
      >
        <rect width={60} height={44} rx={8} />
        <path d="M2.672 2.66l21.364 23.854a8 8 0 0011.923-.005L57.282 2.661M39.001 23.285l18.281 18.378M20.798 23.285L2.672 41.663" />
      </g>
    </svg>
  )
}

export default SvgComponent