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
function SvgMinimize2({
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
      <path d="m16.414 9 5.293-5.293a.999.999 0 1 0-1.414-1.414L15 7.586V4a1 1 0 0 0-2 0v6a.995.995 0 0 0 .292.706l.002.002A.996.996 0 0 0 14 11h6a1 1 0 0 0 0-2zM3.707 21.707 9 16.414V20a1 1 0 0 0 2 0v-6a.995.995 0 0 0-.292-.706l-.002-.002A.995.995 0 0 0 10 13H4a1 1 0 0 0 0 2h3.586l-5.293 5.293a.999.999 0 1 0 1.414 1.414z" />
    </svg>
  );
}
export default SvgMinimize2;
