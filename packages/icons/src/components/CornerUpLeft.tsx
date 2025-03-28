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
function SvgCornerUpLeft({
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
      <path d="M21 20v-7c0-1.38-.561-2.632-1.464-3.536S17.38 8 16 8H6.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.998.998 0 0 0 0 1.414l5 5a.999.999 0 1 0 1.414-1.414L6.414 10H16c.829 0 1.577.335 2.121.879S19 12.171 19 13v7a1 1 0 0 0 2 0z" />
    </svg>
  );
}
export default SvgCornerUpLeft;
