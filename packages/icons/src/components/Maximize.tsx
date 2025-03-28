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
function SvgMaximize({
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
      <path d="M8 2H5a2.997 2.997 0 0 0-3 3v3a1 1 0 0 0 2 0V5c0-.276.111-.525.293-.707S4.724 4 5 4h3a1 1 0 0 0 0-2zm14 6V5a2.997 2.997 0 0 0-3-3h-3a1 1 0 0 0 0 2h3c.276 0 .525.111.707.293S20 4.724 20 5v3a1 1 0 0 0 2 0zm-6 14h3a2.997 2.997 0 0 0 3-3v-3a1 1 0 0 0-2 0v3c0 .276-.111.525-.293.707S19.276 20 19 20h-3a1 1 0 0 0 0 2zM2 16v3a2.997 2.997 0 0 0 3 3h3a1 1 0 0 0 0-2H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19v-3a1 1 0 0 0-2 0z" />
    </svg>
  );
}
export default SvgMaximize;
