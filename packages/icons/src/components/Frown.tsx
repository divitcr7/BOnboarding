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
function SvgFrown({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M23 12c0-3.037-1.232-5.789-3.222-7.778S15.037 1 12 1 6.211 2.232 4.222 4.222 1 8.963 1 12s1.232 5.789 3.222 7.778S8.963 23 12 23s5.789-1.232 7.778-3.222S23 15.037 23 12zm-2 0c0 2.486-1.006 4.734-2.636 6.364S14.486 21 12 21s-4.734-1.006-6.364-2.636S3 14.486 3 12s1.006-4.734 2.636-6.364S9.514 3 12 3s4.734 1.006 6.364 2.636S21 9.514 21 12zm-4.2 3.4s-.131-.173-.331-.383a6.776 6.776 0 0 0-1.874-1.393C13.89 13.272 13.016 13 12 13s-1.89.272-2.595.624A6.776 6.776 0 0 0 7.2 15.4a1 1 0 0 0 1.6 1.2c.041-.05.181-.206.181-.206a4.752 4.752 0 0 1 1.318-.982c.48-.239 1.05-.412 1.701-.412s1.221.173 1.701.413c.36.18.667.397.91.6.171.143.308.277.408.382.14.155.181.205.181.205a1 1 0 0 0 1.6-1.2zM9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgFrown;
