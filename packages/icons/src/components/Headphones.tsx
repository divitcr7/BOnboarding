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
function SvgHeadphones({
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
      <path d="M20 19c0 .276-.111.525-.293.707S19.276 20 19 20h-1c-.276 0-.525-.111-.707-.293S17 19.276 17 19v-3c0-.276.111-.525.293-.707S17.724 15 18 15h2v3zM4 19v-4h2c.276 0 .525.111.707.293S7 15.724 7 16v3c0 .276-.111.525-.293.707S6.276 20 6 20H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19zm-2 0a2.997 2.997 0 0 0 3 3h1a2.997 2.997 0 0 0 3-3v-3a2.997 2.997 0 0 0-3-3H4v-1c0-2.209.894-4.208 2.343-5.657S9.791 4 12 4s4.208.894 5.657 2.343S20 9.791 20 12v1h-2a2.997 2.997 0 0 0-3 3v3a2.997 2.997 0 0 0 3 3h1a2.997 2.997 0 0 0 3-3v-7c0-2.761-1.12-5.263-2.929-7.071S14.761 2 12 2 6.737 3.12 4.929 4.929 2 9.239 2 12v6z" />
    </svg>
  );
}
export default SvgHeadphones;
