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
function SvgFilter({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="m19.845 4-6.609 7.814a.995.995 0 0 0-.236.646v6.922l-2-1V12.46a.996.996 0 0 0-.236-.646L4.155 4zM22 2H2a1 1 0 0 0-.764 1.646L9 12.826V19a1 1 0 0 0 .553.894l4 2A1 1 0 0 0 15 21v-8.174l7.764-9.18A.999.999 0 0 0 22 2z" />
    </svg>
  );
}
export default SvgFilter;
