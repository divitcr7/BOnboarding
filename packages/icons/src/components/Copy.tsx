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
function SvgCopy({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M11 8a2.997 2.997 0 0 0-3 3v9a2.997 2.997 0 0 0 3 3h9a2.997 2.997 0 0 0 3-3v-9a2.997 2.997 0 0 0-3-3zm0 2h9c.276 0 .525.111.707.293S21 10.724 21 11v9c0 .276-.111.525-.293.707S20.276 21 20 21h-9c-.276 0-.525-.111-.707-.293S10 20.276 10 20v-9c0-.276.111-.525.293-.707S10.724 10 11 10zm-6 4H4c-.276 0-.525-.111-.707-.293S3 13.276 3 13V4c0-.276.111-.525.293-.707S3.724 3 4 3h9c.276 0 .525.111.707.293S14 3.724 14 4v1a1 1 0 0 0 2 0V4a2.997 2.997 0 0 0-3-3H4a2.997 2.997 0 0 0-3 3v9a2.997 2.997 0 0 0 3 3h1a1 1 0 0 0 0-2z" />
    </svg>
  );
}
export default SvgCopy;
