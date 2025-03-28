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
function SvgToggleRight({
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
      <path d="M8 4c-2.209 0-4.21.897-5.657 2.343S0 9.791 0 12s.897 4.21 2.343 5.657S5.791 20 8 20h8c2.209 0 4.21-.897 5.657-2.343S24 14.209 24 12s-.897-4.21-2.343-5.657S18.209 4 16 4zm0 2h8c1.657 0 3.156.67 4.243 1.757S22 10.343 22 12s-.67 3.156-1.757 4.243S17.657 18 16 18H8c-1.657 0-3.156-.67-4.243-1.757S2 13.657 2 12s.67-3.156 1.757-4.243S6.343 6 8 6zm12 6c0-1.104-.449-2.106-1.172-2.828a3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0 0 5.656 3.994 3.994 0 0 0 5.656 0A3.994 3.994 0 0 0 20 12zm-2 0c0 .553-.223 1.051-.586 1.414S16.553 14 16 14s-1.051-.223-1.414-.586S14 12.553 14 12s.223-1.051.586-1.414S15.447 10 16 10s1.051.223 1.414.586S18 11.447 18 12z" />
    </svg>
  );
}
export default SvgToggleRight;
