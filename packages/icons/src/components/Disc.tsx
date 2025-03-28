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
function SvgDisc({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M23 12c0-3.037-1.232-5.789-3.222-7.778S15.037 1 12 1 6.211 2.232 4.222 4.222 1 8.963 1 12s1.232 5.789 3.222 7.778S8.963 23 12 23s5.789-1.232 7.778-3.222S23 15.037 23 12zm-2 0c0 2.486-1.006 4.734-2.636 6.364S14.486 21 12 21s-4.734-1.006-6.364-2.636S3 14.486 3 12s1.006-4.734 2.636-6.364S9.514 3 12 3s4.734 1.006 6.364 2.636S21 9.514 21 12zm-5 0c0-1.104-.449-2.106-1.172-2.828a3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0 0 5.656 3.994 3.994 0 0 0 5.656 0A3.994 3.994 0 0 0 16 12zm-2 0c0 .553-.223 1.051-.586 1.414S12.553 14 12 14s-1.051-.223-1.414-.586S10 12.553 10 12s.223-1.051.586-1.414S11.447 10 12 10s1.051.223 1.414.586S14 11.447 14 12z" />
    </svg>
  );
}
export default SvgDisc;
