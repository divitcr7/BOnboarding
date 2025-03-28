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
function SvgMic({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M12 2c.553 0 1.051.223 1.414.586S14 3.447 14 4v8c0 .553-.223 1.051-.586 1.414S12.553 14 12 14s-1.051-.223-1.414-.586S10 12.553 10 12V4c0-.553.223-1.051.586-1.414S11.447 2 12 2zm0-2c-1.104 0-2.106.449-2.828 1.172S8 2.896 8 4v8c0 1.104.449 2.106 1.172 2.828a3.994 3.994 0 0 0 5.656 0A3.994 3.994 0 0 0 16 12V4c0-1.104-.449-2.106-1.172-2.828S13.104 0 12 0zM8 24h8a1 1 0 0 0 0-2h-3v-2.062a7.982 7.982 0 0 0 4.657-2.281A7.981 7.981 0 0 0 20 12v-2a1 1 0 0 0-2 0v2c0 1.657-.67 3.156-1.757 4.243S13.657 18 12 18s-3.156-.67-4.243-1.757S6 13.657 6 12v-2a1 1 0 0 0-2 0v2c0 2.209.897 4.21 2.343 5.657A7.98 7.98 0 0 0 11 19.938V22H8a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgMic;
