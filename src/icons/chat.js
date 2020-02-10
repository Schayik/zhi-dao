import React from "react"

function SvgComponent(props) {
  return (
    <svg width="1em" height="1em" viewBox="-2 -2 64 64" {...props}>
      <path
        fill="none"
        stroke="#EA4045"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M30.001 0C12.898 0 0 10.784 0 25.083c0 6.65 2.183 15.693 12.587 21.01.329.169.538.517.538.897V60l14.263-9.754a.86.86 0 01.585-.164l.36.02a28.72 28.72 0 001.666.062C47.102 50.164 60 39.382 60 25.083S47.103 0 30.001 0z"
      />
    </svg>
  )
}

export default SvgComponent
