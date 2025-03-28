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
function SvgUnlock({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M5 12h14c.276 0 .525.111.707.293S20 12.724 20 13v7c0 .276-.111.525-.293.707S19.276 21 19 21H5c-.276 0-.525-.111-.707-.293S4 20.276 4 20v-7c0-.276.111-.525.293-.707S4.724 12 5 12zm3-2V7a3.988 3.988 0 0 1 1.169-2.831 3.983 3.983 0 0 1 2.821-1.174 3.985 3.985 0 0 1 2.652 1 4.052 4.052 0 0 1 1.28 2.209 1 1 0 1 0 1.958-.408 6.051 6.051 0 0 0-1.912-3.299A5.963 5.963 0 0 0 11.995.995c-1.657.002-3.157.676-4.241 1.762S5.998 5.344 6 7v3H5a2.997 2.997 0 0 0-3 3v7a2.997 2.997 0 0 0 3 3h14a2.997 2.997 0 0 0 3-3v-7a2.997 2.997 0 0 0-3-3z" />
    </svg>
  );
}
export default SvgUnlock;
