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
function SvgSlash({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M23 12c0-3.037-1.232-5.789-3.222-7.778S15.037 1 12 1 6.211 2.232 4.222 4.222 1 8.963 1 12s1.232 5.789 3.222 7.778S8.963 23 12 23s5.789-1.232 7.778-3.222S23 15.037 23 12zm-3.968 5.618L6.382 4.968A8.961 8.961 0 0 1 12 3c2.486 0 4.734 1.006 6.364 2.636S21 9.514 21 12a8.961 8.961 0 0 1-1.968 5.618zM4.968 6.382l12.65 12.65A8.961 8.961 0 0 1 12 21c-2.486 0-4.734-1.006-6.364-2.636S3 14.486 3 12c0-2.125.736-4.078 1.968-5.618z" />
    </svg>
  );
}
export default SvgSlash;
