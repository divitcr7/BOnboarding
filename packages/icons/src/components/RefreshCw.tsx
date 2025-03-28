import * as React from 'react';
import type { SVGProps } from 'react';
import useWithViewbox from '../useWithViewbox';
const mapSize = {
  sm: 16,
  md: 24,
  lg: 32,
};
interface SvgIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}
function SvgRefreshCw({
  size = 'md',
  color = '#000000',
  ...props
}: SvgIconProps) {
  const ref: React.RefObject<SVGSVGElement> = React.useRef(null);
  useWithViewbox(ref);
  const actualSize = mapSize[size] || 24;
  props = {
    fill: color,
    width: actualSize,
    height: actualSize,
    ref,
    ...props,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <path d="M4.453 9.334C5.19 7.251 6.7 5.665 8.549 4.782s4.032-1.059 6.114-.322a7.87 7.87 0 0 1 2.983 1.88L20.476 9H17a1 1 0 0 0 0 2h6.011a.992.992 0 0 0 .71-.307l.036-.039a.99.99 0 0 0 .242-.611L24 10V4a1 1 0 0 0-2 0v3.689L19.074 4.94a9.874 9.874 0 0 0-3.743-2.364c-2.603-.921-5.335-.699-7.643.402s-4.199 3.086-5.12 5.689a1 1 0 1 0 1.884.667zM2 16.312l2.955 2.777c1.929 1.931 4.49 2.908 7.048 2.909s5.119-.975 7.072-2.927a9.877 9.877 0 0 0 2.361-3.745 1 1 0 1 0-1.892-.65 7.872 7.872 0 0 1-1.883 2.981c-1.563 1.562-3.609 2.342-5.657 2.342s-4.094-.782-5.679-2.366L3.525 15H7a1 1 0 0 0 0-2H.989a.992.992 0 0 0-.71.307l-.036.039a.99.99 0 0 0-.242.611L0 14v6a1 1 0 0 0 2 0z" />
    </svg>
  );
}
export default SvgRefreshCw;
