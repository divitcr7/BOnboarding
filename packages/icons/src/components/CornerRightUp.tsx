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
function SvgCornerRightUp({
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
      <path d="M4 21h7c1.38 0 2.632-.561 3.536-1.464S16 17.38 16 16V6.414l3.293 3.293a.999.999 0 1 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a.999.999 0 1 0 1.414 1.414L14 6.414V16c0 .829-.335 1.577-.879 2.121S11.829 19 11 19H4a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgCornerRightUp;
