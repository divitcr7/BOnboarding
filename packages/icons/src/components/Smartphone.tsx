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
function SvgSmartphone({
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
      <path d="M7 1a2.997 2.997 0 0 0-3 3v16a2.997 2.997 0 0 0 3 3h10a2.997 2.997 0 0 0 3-3V4a2.997 2.997 0 0 0-3-3zm0 2h10c.276 0 .525.111.707.293S18 3.724 18 4v16c0 .276-.111.525-.293.707S17.276 21 17 21H7c-.276 0-.525-.111-.707-.293S6 20.276 6 20V4c0-.276.111-.525.293-.707S6.724 3 7 3zm5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgSmartphone;
