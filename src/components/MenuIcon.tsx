import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_2"
    viewBox="0 0 47.04 28.89"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-5{fill:none;stroke:#34412c;stroke-linecap:round;stroke-miterlimit:10;stroke-width:5px}"
        }
      </style>
    </defs>
    <g id="Layer_3">
      <path
        d="M44.54 14.45H2.5M44.54 26.39H2.5M44.54 2.5H2.5"
        className="cls-5"
      />
    </g>
  </svg>
)
export { SvgComponent as MenuIcon }
