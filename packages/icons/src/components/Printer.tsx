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
function SvgPrinter({
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
      <path d="M17 8H7V3h10zM5 19v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h1a2.997 2.997 0 0 0 3-3v-5a2.997 2.997 0 0 0-3-3h-1V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6H4a2.997 2.997 0 0 0-3 3v5a2.997 2.997 0 0 0 3 3zm1-6a1 1 0 0 0-1 1v3H4c-.276 0-.525-.111-.707-.293S3 16.276 3 16v-5c0-.276.111-.525.293-.707S3.724 10 4 10h16c.276 0 .525.111.707.293S21 10.724 21 11v5c0 .276-.111.525-.293.707S20.276 17 20 17h-1v-3a1 1 0 0 0-1-1zm1 2h10v6H7z" />
    </svg>
  );
}
export default SvgPrinter;
