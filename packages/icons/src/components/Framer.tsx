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
function SvgFramer({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="m12.414 8-5-5H18v5zM6 16v-6h5.586l5 5H12a1 1 0 0 0 0 2h7a.999.999 0 0 0 .707-1.707L14.414 10H19a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-.707 1.707L9.586 8H5a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0zm-1.707.707 7 7A.999.999 0 0 0 13 23v-7a1 1 0 0 0-2 0v4.586l-5.293-5.293a.999.999 0 1 0-1.414 1.414zM5 17h7a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgFramer;
