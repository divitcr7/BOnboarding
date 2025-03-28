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
function SvgPocket({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M4 2a2.997 2.997 0 0 0-3 3v6c0 3.037 1.232 5.789 3.222 7.778S8.963 22 12 22s5.789-1.232 7.778-3.222S23 14.037 23 11V5a2.997 2.997 0 0 0-3-3zm0 2h16c.276 0 .525.111.707.293S21 4.724 21 5v6c0 2.486-1.006 4.734-2.636 6.364S14.486 20 12 20s-4.734-1.006-6.364-2.636S3 13.486 3 11V5c0-.276.111-.525.293-.707S3.724 4 4 4zm3.293 6.707 4 4a.999.999 0 0 0 1.414 0l4-4a.999.999 0 1 0-1.414-1.414L12 12.586 8.707 9.293a.999.999 0 1 0-1.414 1.414z" />
    </svg>
  );
}
export default SvgPocket;
