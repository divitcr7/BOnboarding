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
function SvgRepeat({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M4 11V9c0-.829.335-1.577.879-2.121S6.171 6 7 6h11.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414l4-4a.998.998 0 0 0 0-1.414l-4-4a.999.999 0 1 0-1.414 1.414L18.586 4H7c-1.38 0-2.632.561-3.536 1.464S2 7.62 2 9v2a1 1 0 0 0 2 0zm16 2v2c0 .829-.335 1.577-.879 2.121S17.829 18 17 18H5.414l2.293-2.293a.999.999 0 1 0-1.414-1.414l-4 4A1.008 1.008 0 0 0 2 19c0 .256.098.512.293.707l4 4a.999.999 0 1 0 1.414-1.414L5.414 20H17c1.38 0 2.632-.561 3.536-1.464S22 16.38 22 15v-2a1 1 0 0 0-2 0z" />
    </svg>
  );
}
export default SvgRepeat;
