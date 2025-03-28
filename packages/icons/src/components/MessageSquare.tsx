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
function SvgMessageSquare({
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
      <path d="M22 15V5a2.997 2.997 0 0 0-3-3H5a2.997 2.997 0 0 0-3 3v16a.999.999 0 0 0 1.707.707L7.414 18H19a2.997 2.997 0 0 0 3-3zm-2 0c0 .276-.111.525-.293.707S19.276 16 19 16H7a.997.997 0 0 0-.707.293L4 18.586V5c0-.276.111-.525.293-.707S4.724 4 5 4h14c.276 0 .525.111.707.293S20 4.724 20 5z" />
    </svg>
  );
}
export default SvgMessageSquare;
