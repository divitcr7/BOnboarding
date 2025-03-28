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
function SvgMinimize({
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
      <path d="M7 3v3c0 .276-.111.525-.293.707S6.276 7 6 7H3a1 1 0 0 0 0 2h3a2.997 2.997 0 0 0 3-3V3a1 1 0 0 0-2 0zm14 4h-3c-.276 0-.525-.111-.707-.293S17 6.276 17 6V3a1 1 0 0 0-2 0v3a2.997 2.997 0 0 0 3 3h3a1 1 0 0 0 0-2zm-4 14v-3c0-.276.111-.525.293-.707S17.724 17 18 17h3a1 1 0 0 0 0-2h-3a2.997 2.997 0 0 0-3 3v3a1 1 0 0 0 2 0zM3 17h3c.276 0 .525.111.707.293S7 17.724 7 18v3a1 1 0 0 0 2 0v-3a2.997 2.997 0 0 0-3-3H3a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgMinimize;
