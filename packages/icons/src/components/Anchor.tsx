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
function SvgAnchor({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M14 5c0 .553-.223 1.051-.586 1.414S12.553 7 12 7s-1.051-.223-1.414-.586S10 5.553 10 5s.223-1.051.586-1.414S11.447 3 12 3s1.051.223 1.414.586S14 4.447 14 5zm-9 6H2a1 1 0 0 0-1 1c0 3.037 1.232 5.789 3.222 7.778S8.963 23 12 23s5.789-1.232 7.778-3.222S23 15.037 23 12a1 1 0 0 0-1-1h-3a1 1 0 0 0 0 2h1.945c-.23 2.086-1.173 3.956-2.581 5.364S15.086 20.715 13 20.945V8.874A3.999 3.999 0 0 0 16 5c0-1.104-.449-2.106-1.172-2.828a3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0 0 5.656A3.992 3.992 0 0 0 11 8.874v12.071c-2.086-.23-3.956-1.173-5.364-2.581S3.285 15.086 3.055 13H5a1 1 0 0 0 0-2z" />
    </svg>
  );
}
export default SvgAnchor;
