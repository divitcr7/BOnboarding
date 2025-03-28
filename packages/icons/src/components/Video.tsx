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
function SvgVideo({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M22 8.943v6.114L17.72 12zM3 4a2.997 2.997 0 0 0-3 3v10a2.997 2.997 0 0 0 3 3h11a2.997 2.997 0 0 0 3-3v-3.057l5.419 3.871A1 1 0 0 0 24 17V7a1 1 0 0 0-1.581-.814L17 10.057V7a2.997 2.997 0 0 0-3-3zm0 2h11c.276 0 .525.111.707.293S15 6.724 15 7v10c0 .276-.111.525-.293.707S14.276 18 14 18H3c-.276 0-.525-.111-.707-.293S2 17.276 2 17V7c0-.276.111-.525.293-.707S2.724 6 3 6z" />
    </svg>
  );
}
export default SvgVideo;
