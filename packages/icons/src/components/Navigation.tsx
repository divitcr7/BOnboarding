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
function SvgNavigation({
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
      <path d="M2.572 10.096a.999.999 0 0 0 .186 1.874l7.418 1.854 1.854 7.418a.998.998 0 0 0 1.874.185l9-19a1 1 0 0 0-1.332-1.332zm3.381.612 13.945-6.606-6.606 13.945-1.322-5.29a1.002 1.002 0 0 0-.728-.728z" />
    </svg>
  );
}
export default SvgNavigation;
