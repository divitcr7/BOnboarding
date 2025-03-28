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
function SvgHome({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M2.386 8.211A.997.997 0 0 0 2 9v11a2.997 2.997 0 0 0 3 3h14a2.997 2.997 0 0 0 3-3V9a1 1 0 0 0-.386-.789l-9-7a1.003 1.003 0 0 0-1.228 0zM16 21v-9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v9H5c-.276 0-.525-.111-.707-.293S4 20.276 4 20V9.489l8-6.222 8 6.222V20c0 .276-.111.525-.293.707S19.276 21 19 21zm-6 0v-8h4v8z" />
    </svg>
  );
}
export default SvgHome;
