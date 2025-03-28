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
function SvgMusic({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M8 18c0 .553-.223 1.051-.586 1.414S6.553 20 6 20s-1.051-.223-1.414-.586S4 18.553 4 18s.223-1.051.586-1.414S5.447 16 6 16s1.051.223 1.414.586S8 17.447 8 18zm14-2V3a1 1 0 0 0-1.165-.986l-12 2A1.001 1.001 0 0 0 8 5v9.535A3.986 3.986 0 0 0 6 14c-1.104 0-2.106.449-2.828 1.172a3.994 3.994 0 0 0 0 5.656 3.994 3.994 0 0 0 5.656 0A3.994 3.994 0 0 0 10 18V5.847L20 4.18v8.355A3.986 3.986 0 0 0 18 12c-1.104 0-2.106.449-2.828 1.172a3.994 3.994 0 0 0 0 5.656 3.994 3.994 0 0 0 5.656 0A3.994 3.994 0 0 0 22 16zm-2 0c0 .553-.223 1.051-.586 1.414S18.553 18 18 18s-1.051-.223-1.414-.586S16 16.553 16 16s.223-1.051.586-1.414S17.447 14 18 14s1.051.223 1.414.586S20 15.447 20 16z" />
    </svg>
  );
}
export default SvgMusic;
