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
function SvgTrash({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M18 7v13c0 .276-.111.525-.293.707S17.276 21 17 21H7c-.276 0-.525-.111-.707-.293S6 20.276 6 20V7zm-1-2V4a2.997 2.997 0 0 0-3-3h-4a2.997 2.997 0 0 0-3 3v1H3a1 1 0 0 0 0 2h1v13a2.997 2.997 0 0 0 3 3h10a2.997 2.997 0 0 0 3-3V7h1a1 1 0 0 0 0-2zM9 5V4c0-.276.111-.525.293-.707S9.724 3 10 3h4c.276 0 .525.111.707.293S15 3.724 15 4v1z" />
    </svg>
  );
}
export default SvgTrash;
