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
function SvgRewind({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M10 16.955 3.629 12 10 7.045zm11.386 2.834A1 1 0 0 0 23 19V5a1 1 0 0 0-1.614-.789l-9 7a.995.995 0 0 0-.386.779V5a1 1 0 0 0-1.614-.789l-9 7a1 1 0 0 0 0 1.578l9 7A1 1 0 0 0 12 19v-6.991a.997.997 0 0 0 .386.78zM21 16.955 14.629 12 21 7.045z" />
    </svg>
  );
}
export default SvgRewind;
