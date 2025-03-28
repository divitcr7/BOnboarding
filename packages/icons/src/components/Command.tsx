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
function SvgCommand({
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
      <path d="M16 16h2c.553 0 1.051.223 1.414.586S20 17.447 20 18s-.223 1.051-.586 1.414S18.553 20 18 20s-1.051-.223-1.414-.586S16 18.553 16 18zm-8 0v2c0 .553-.223 1.051-.586 1.414S6.553 20 6 20s-1.051-.223-1.414-.586S4 18.553 4 18s.223-1.051.586-1.414S5.447 16 6 16zm0-8H6c-.553 0-1.051-.223-1.414-.586S4 6.553 4 6s.223-1.051.586-1.414S5.447 4 6 4s1.051.223 1.414.586S8 5.447 8 6zm8 0H8v8h8zm2-4c.553 0 1.051.223 1.414.586S20 5.447 20 6s-.223 1.051-.586 1.414S18.553 8 18 8h-2V6c0-.553.223-1.051.586-1.414S17.447 4 18 4zm-8 6V6c0-1.104-.449-2.106-1.172-2.828a3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0 0 5.656A3.994 3.994 0 0 0 6 10zm0 4H6c-1.104 0-2.106.449-2.828 1.172a3.994 3.994 0 0 0 0 5.656 3.994 3.994 0 0 0 5.656 0A3.994 3.994 0 0 0 10 18zm4 0v4c0 1.104.449 2.106 1.172 2.828a3.994 3.994 0 0 0 5.656 0 3.994 3.994 0 0 0 0-5.656A3.994 3.994 0 0 0 18 14zm0-4v4h-4v-4zm4-8c-1.104 0-2.106.449-2.828 1.172S14 4.896 14 6v4h4c1.104 0 2.106-.449 2.828-1.172a3.994 3.994 0 0 0 0-5.656A3.994 3.994 0 0 0 18 2z" />
    </svg>
  );
}
export default SvgCommand;
