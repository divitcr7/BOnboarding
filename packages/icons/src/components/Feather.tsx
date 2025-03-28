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
function SvgFeather({
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
      <path d="M18.111 15.792a.996.996 0 0 0 .183-.184l2.653-2.661c1.367-1.367 2.051-3.161 2.051-4.952s-.684-3.585-2.051-4.952S17.786.992 15.995.992s-3.585.684-4.952 2.051l-6.75 6.75A.997.997 0 0 0 4 10.5v8.086l-2.707 2.707a.999.999 0 1 0 1.414 1.414L5.414 20H13.5a.994.994 0 0 0 .708-.294zM9.414 16h5.665l-1.994 2H7.414zm7.659-2h-5.659l5.293-5.293a.999.999 0 1 0-1.414-1.414L6 16.586v-5.672l6.457-6.457c.977-.977 2.256-1.465 3.538-1.465s2.561.488 3.538 1.465 1.465 2.256 1.465 3.538-.488 2.561-1.465 3.538z" />
    </svg>
  );
}
export default SvgFeather;
