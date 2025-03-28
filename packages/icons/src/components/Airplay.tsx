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
function SvgAirplay({
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
      <path d="M5 16H4c-.276 0-.525-.111-.707-.293S3 15.276 3 15V5c0-.276.111-.525.293-.707S3.724 4 4 4h16c.276 0 .525.111.707.293S21 4.724 21 5v10c0 .276-.111.525-.293.707S20.276 16 20 16h-1a1 1 0 0 0 0 2h1a2.997 2.997 0 0 0 3-3V5a2.997 2.997 0 0 0-3-3H4a2.997 2.997 0 0 0-3 3v10a2.997 2.997 0 0 0 3 3h1a1 1 0 0 0 0-2zm7.768-1.64a1 1 0 0 0-1.536 0l-5 6A1 1 0 0 0 7 22h10a1 1 0 0 0 .768-1.64zM12 16.562 14.865 20h-5.73z" />
    </svg>
  );
}
export default SvgAirplay;
