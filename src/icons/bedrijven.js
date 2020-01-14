import React from "react"

function SvgComponent(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 100 100" {...props}>
      <g fill="none">
        <path
          fill="#CD003C"
          d="M43.75 43.75a1 1 0 011 1V56a1 1 0 01-2 0v-.75h-9.5V56a1 1 0 01-2 0V44.75a1 1 0 011-1h11.5zM25.75 30a1 1 0 011 1v5.5h3a1 1 0 010 2h-3v6.582l2.641-1.015a1 1 0 11.718 1.866l-3.36 1.291L26.75 54a3 3 0 01-3 3H21a1 1 0 010-2h2.75a1 1 0 001-1v-6.007l-3.391 1.305a1 1 0 11-.718-1.867l4.109-1.58V38.5H21a1 1 0 010-2h3.75V31a1 1 0 011-1zm17 20.5h-9.5v2.75h9.5V50.5zm0-4.75h-9.5v2.75h9.5v-2.75zM32.25 30a1 1 0 011 1l.001 4.488c3.89-.558 7.222-1.637 10.002-3.23a1 1 0 11.994 1.735c-3.08 1.765-6.746 2.934-10.996 3.514l-.001 1.243a1 1 0 001 1h8.715a1 1 0 00.895-.554l1.224-2.456a1 1 0 111.79.893l-1.224 2.455a3 3 0 01-2.685 1.662H34.25a3 3 0 01-3-3V31a1 1 0 011-1zm27.33 8v5.313c0 .352.047.678.146.976l.45.584-.11.084c.72.996 2.264 1.543 4.807 1.543h14.88v2H73.81v.75h5.941v2H73.81V54a3 3 0 01-3 3h-2.7a1 1 0 110-2h2.703a1 1 0 001-1l-.001-2.75H53v-2h18.811v-.75h-6.938c-3.092 0-5.271-.822-6.401-2.319l-3.542 2.721-1.218-1.586 3.949-3.034a5.578 5.578 0 01-.082-.969V40H53v-2h6.58zm1.156 13.735a17.491 17.491 0 014.492 2.606 1 1 0 11-1.241 1.568 15.494 15.494 0 00-3.98-2.311 1 1 0 01.73-1.863zM73.65 30.554a1 1 0 011.79.892c-.233.469-.481.904-.745 1.305l5.058-.001v2h-9.375l-.248 1h5.653a1 1 0 011 1v8a1 1 0 01-1 1H63.901a1 1 0 01-1-1v-8a1 1 0 011-1h4.167l.248-1h-8.385v-2h5.423a12.24 12.24 0 00-.928-1.049 1 1 0 111.426-1.402c.835.849 1.468 1.663 1.896 2.451h1.063l.053-.211.853.21 2.44.003c.473-.491.913-1.11 1.316-1.857zm1.133 12.696H64.9l.001.5h9.881v-.5zm0-2.75h-9.881v.75h9.881v-.75zm-6.052-2.75h-3.829l-.001.75h9.882v-.75h-5.149l-.051.211-.852-.211zm-12.125-6.685c1.137.824 2.117 1.873 2.939 3.141a1 1 0 01-1.678 1.088c-.69-1.066-1.502-1.933-2.434-2.61a1 1 0 011.173-1.619z"
        />
        <path
          fill="#000"
          d="M63 .08C69.03.08 73.92 4.97 73.92 11l-.001 5.079 21.201.001a4.8 4.8 0 014.8 4.8v45.397a4.8 4.8 0 01-4.184 4.76l-.989.127-2.181 24.384a4.8 4.8 0 01-4.781 4.372h-75.57a4.8 4.8 0 01-4.78-4.372L5.25 71.164l-.987-.127a4.8 4.8 0 01-4.184-4.76V20.88a4.8 4.8 0 014.8-4.8l21.2-.001V11C26.08 4.97 30.97.08 37 .08h26zm27.847 71.589l-33.928 4.394.001 2.097a5.76 5.76 0 01-5.76 5.76h-2.32a5.76 5.76 0 01-5.76-5.76v-2.097L9.151 71.669l2.108 23.537a.96.96 0 00.956.874h75.57a.96.96 0 00.956-.874l2.106-23.537zM51.16 68.92h-2.32c-1.06 0-1.92.86-1.92 1.92v7.32c0 1.06.86 1.92 1.92 1.92h2.32c1.06 0 1.92-.86 1.92-1.92v-7.32c0-1.06-.86-1.92-1.92-1.92zm43.96-49H4.88a.96.96 0 00-.96.96v45.397c0 .482.358.89.837.952L43.08 72.19v-1.35a5.76 5.76 0 015.76-5.76h2.32a5.76 5.76 0 015.76 5.76l-.001 1.35 38.324-4.961a.96.96 0 00.837-.952V20.88a.96.96 0 00-.96-.96zM63 3.92H37A7.08 7.08 0 0029.92 11l-.001 5.079h3.161V13A5.92 5.92 0 0139 7.08h22A5.92 5.92 0 0166.92 13l-.001 3.079h3.161V11A7.08 7.08 0 0063 3.92zm-2 7H39A2.08 2.08 0 0036.92 13l-.001 3.079H63.08V13A2.08 2.08 0 0061 10.92z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent