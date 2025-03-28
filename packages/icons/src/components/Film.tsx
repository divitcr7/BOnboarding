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
function SvgFilm({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M16 11H8V3h8zm-8 2h8v8H8zM6 6H3V4.18c0-.326.131-.62.346-.834S3.854 3 4.18 3H6zM3 8h3v3H3zm3 8H3v-3h3zm-3 2h3v3H4.18c-.326 0-.62-.131-.834-.346S3 20.146 3 19.82zm18-2h-3v-3h3zm-3 2h3v1.82c0 .326-.131.62-.346.834s-.508.346-.834.346H18zm3-12h-3V3h1.82c.326 0 .62.131.834.346s.346.508.346.834zm2 1V4.18A3.176 3.176 0 0 0 19.82 1H4.18A3.176 3.176 0 0 0 1 4.18v15.64A3.176 3.176 0 0 0 4.18 23h15.64A3.176 3.176 0 0 0 23 19.82zm-5 1h3v3h-3z" />
    </svg>
  );
}
export default SvgFilm;
