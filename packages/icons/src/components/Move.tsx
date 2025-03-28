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
function SvgMove({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M11 4.414V11H4.414l1.293-1.293a.999.999 0 1 0-1.414-1.414l-3 3a.997.997 0 0 0 0 1.414l3 3a.999.999 0 1 0 1.414-1.414L4.414 13H11v6.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414l3 3a.998.998 0 0 0 1.414 0l3-3a.999.999 0 1 0-1.414-1.414L13 19.586V13h6.586l-1.293 1.293a.999.999 0 1 0 1.414 1.414l3-3a.998.998 0 0 0 0-1.414l-3-3a.999.999 0 1 0-1.414 1.414L19.586 11H13V4.414l1.293 1.293a.999.999 0 1 0 1.414-1.414l-3-3a1.006 1.006 0 0 0-1.414 0l-3 3a.999.999 0 1 0 1.414 1.414z" />
    </svg>
  );
}
export default SvgMove;
