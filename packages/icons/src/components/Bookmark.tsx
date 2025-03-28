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
function SvgBookmark({
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
      <path d="M18.419 21.814A1 1 0 0 0 20 21V5a2.997 2.997 0 0 0-3-3H7a2.997 2.997 0 0 0-3 3v16a1 1 0 0 0 1.581.813L12 17.229zM18 19.057l-5.419-3.871a1 1 0 0 0-1.162 0L6 19.057V5c0-.276.111-.525.293-.707S6.724 4 7 4h10c.276 0 .525.111.707.293S18 4.724 18 5z" />
    </svg>
  );
}
export default SvgBookmark;
