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
function SvgMonitor({
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
      <path d="M12 16H4c-.276 0-.525-.111-.707-.293S3 15.276 3 15V5c0-.276.111-.525.293-.707S3.724 4 4 4h16c.276 0 .525.111.707.293S21 4.724 21 5v10c0 .276-.111.525-.293.707S20.276 16 20 16zm-1 2v2H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2h7a2.997 2.997 0 0 0 3-3V5a2.997 2.997 0 0 0-3-3H4a2.997 2.997 0 0 0-3 3v10a2.997 2.997 0 0 0 3 3z" />
    </svg>
  );
}
export default SvgMonitor;
