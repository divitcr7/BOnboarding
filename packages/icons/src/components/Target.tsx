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
function SvgTarget({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M23 12c0-3.037-1.232-5.789-3.222-7.778S15.037 1 12 1 6.211 2.232 4.222 4.222 1 8.963 1 12s1.232 5.789 3.222 7.778S8.963 23 12 23s5.789-1.232 7.778-3.222S23 15.037 23 12zm-2 0c0 2.486-1.006 4.734-2.636 6.364S14.486 21 12 21s-4.734-1.006-6.364-2.636S3 14.486 3 12s1.006-4.734 2.636-6.364S9.514 3 12 3s4.734 1.006 6.364 2.636S21 9.514 21 12zm-2 0c0-1.933-.785-3.684-2.05-4.95S13.933 5 12 5s-3.684.785-4.95 2.05S5 10.067 5 12s.785 3.684 2.05 4.95S10.067 19 12 19s3.684-.785 4.95-2.05S19 13.933 19 12zm-2 0c0 1.381-.559 2.63-1.464 3.536S13.381 17 12 17s-2.63-.559-3.536-1.464S7 13.381 7 12s.559-2.63 1.464-3.536S10.619 7 12 7s2.63.559 3.536 1.464S17 10.619 17 12zm-2 0a2.997 2.997 0 0 0-5.121-2.121 2.997 2.997 0 0 0 0 4.242 2.997 2.997 0 0 0 4.242 0A2.997 2.997 0 0 0 15 12zm-2 0c0 .276-.111.525-.293.707S12.276 13 12 13s-.525-.111-.707-.293S11 12.276 11 12s.111-.525.293-.707S11.724 11 12 11s.525.111.707.293.293.431.293.707z" />
    </svg>
  );
}
export default SvgTarget;
