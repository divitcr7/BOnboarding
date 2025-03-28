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
function SvgBell({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M17 8c0 4.011.947 6.52 1.851 8H5.149C6.053 14.52 7 12.011 7 8c0-1.381.559-2.63 1.464-3.536S10.619 3 12 3s2.63.559 3.536 1.464S17 6.619 17 8zm2 0c0-1.933-.785-3.684-2.05-4.95S13.933 1 12 1s-3.684.785-4.95 2.05S5 6.067 5 8c0 6.127-2.393 8.047-2.563 8.174A1 1 0 0 0 3 18h18a1 1 0 0 0 .571-1.821C21.395 16.049 19 14.129 19 8zm-6.135 12.498a.998.998 0 0 1-1.726.007 1 1 0 1 0-1.737.991c.25.439.623.823 1.093 1.096.716.416 1.535.501 2.276.304s1.409-.678 1.824-1.394a1 1 0 0 0-1.73-1.004z" />
    </svg>
  );
}
export default SvgBell;
