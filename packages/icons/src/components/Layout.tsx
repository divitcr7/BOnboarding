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
function SvgLayout({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M5 2a2.997 2.997 0 0 0-3 3v14a2.997 2.997 0 0 0 3 3h14a2.997 2.997 0 0 0 3-3V5a2.997 2.997 0 0 0-3-3zm15 6H4V5c0-.276.111-.525.293-.707S4.724 4 5 4h14c.276 0 .525.111.707.293S20 4.724 20 5zM8 10v10H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19v-9zm2 10V10h10v9c0 .276-.111.525-.293.707S19.276 20 19 20z" />
    </svg>
  );
}
export default SvgLayout;
