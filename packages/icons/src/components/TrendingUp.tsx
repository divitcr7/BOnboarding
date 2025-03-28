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
function SvgTrendingUp({
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
      <path d="M17 7h3.586L13.5 14.086 9.207 9.793a.999.999 0 0 0-1.414 0l-7.5 7.5a.999.999 0 1 0 1.414 1.414L8.5 11.914l4.293 4.293a.999.999 0 0 0 1.414 0L22 8.414V12a1 1 0 0 0 2 0V6a.995.995 0 0 0-.292-.706l-.002-.002A.996.996 0 0 0 23 5h-6a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgTrendingUp;
