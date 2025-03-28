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
function SvgSunrise({
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
      <path d="M18 18c0-1.657-.673-3.158-1.757-4.243S13.657 12 12 12s-3.158.673-4.243 1.757S6 16.343 6 18a1 1 0 0 0 2 0c0-1.105.447-2.103 1.172-2.828S10.895 14 12 14s2.103.447 2.828 1.172S16 16.895 16 18a1 1 0 0 0 2 0zM3.513 10.927l1.42 1.42a.999.999 0 1 0 1.414-1.414l-1.42-1.42a.999.999 0 1 0-1.414 1.414zM1 19h2a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zm20 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zm-1.933-6.653 1.42-1.42a.999.999 0 1 0-1.414-1.414l-1.42 1.42a.999.999 0 1 0 1.414 1.414zM23 21H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2zM8.707 6.707 11 4.414V9a1 1 0 0 0 2 0V4.414l2.293 2.293a.999.999 0 1 0 1.414-1.414l-4-4a1.006 1.006 0 0 0-1.414 0l-4 4a.999.999 0 1 0 1.414 1.414z" />
    </svg>
  );
}
export default SvgSunrise;
