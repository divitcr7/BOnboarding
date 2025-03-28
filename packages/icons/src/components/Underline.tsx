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
function SvgUnderline({
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
      <path d="M5 3v7c0 1.933.785 3.684 2.05 4.95S10.067 17 12 17s3.684-.785 4.95-2.05S19 11.933 19 10V3a1 1 0 0 0-2 0v7c0 1.381-.559 2.63-1.464 3.536S13.381 15 12 15s-2.63-.559-3.536-1.464S7 11.381 7 10V3a1 1 0 0 0-2 0zM4 22h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgUnderline;
