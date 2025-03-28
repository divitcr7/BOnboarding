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
function SvgSkipBack({
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
      <path d="M18.375 20.781A1 1 0 0 0 20 20V4a1 1 0 0 0-1.625-.781l-10 8a1 1 0 0 0 0 1.562zM18 17.919 10.601 12 18 6.081zM6 19V5a1 1 0 0 0-2 0v14a1 1 0 0 0 2 0z" />
    </svg>
  );
}
export default SvgSkipBack;
