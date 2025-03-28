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
function SvgDelete({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M21 5c.276 0 .525.111.707.293S22 5.724 22 6v12c0 .276-.111.525-.293.707S21.276 19 21 19H8.454l-6.125-7 6.125-7zm0-2H8c-.3 0-.568.132-.753.341l-7 8a1 1 0 0 0 0 1.317l7 8A1 1 0 0 0 8 21h13a2.997 2.997 0 0 0 3-3V6a2.997 2.997 0 0 0-3-3zm-9.707 6.707L13.586 12l-2.293 2.293a.999.999 0 1 0 1.414 1.414L15 13.414l2.293 2.293a.999.999 0 1 0 1.414-1.414L16.414 12l2.293-2.293a.999.999 0 1 0-1.414-1.414L15 10.586l-2.293-2.293a.999.999 0 1 0-1.414 1.414z" />
    </svg>
  );
}
export default SvgDelete;
