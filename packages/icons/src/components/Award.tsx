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
function SvgAward({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="m14.986 15.424.75 5.652-3.221-1.933a1 1 0 0 0-1.029 0l-3.221 1.933.751-5.651c.921.371 1.929.575 2.984.575s2.063-.205 2.986-.576zm.346-2.433a.986.986 0 0 0-.163.105A5.972 5.972 0 0 1 12 14c-1.657 0-3.156-.67-4.243-1.757S6 9.657 6 8s.67-3.156 1.757-4.243S10.343 2 12 2s3.156.67 4.243 1.757S18 6.343 18 8s-.67 3.156-1.757 4.243a6.004 6.004 0 0 1-.911.748zM7.14 14.355l-1.131 8.513a1 1 0 0 0 1.506.989L12 21.166l4.486 2.691a1 1 0 0 0 1.506-.989l-1.13-8.515A7.977 7.977 0 0 0 20 8c0-2.209-.897-4.21-2.343-5.657S14.209 0 12 0 7.79.897 6.343 2.343 4 5.791 4 8a7.981 7.981 0 0 0 3.139 6.355z" />
    </svg>
  );
}
export default SvgAward;
