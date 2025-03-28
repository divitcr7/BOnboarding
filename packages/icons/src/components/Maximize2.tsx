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
function SvgMaximize2({
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
      <path d="m18.586 4-5.293 5.293a.999.999 0 1 0 1.414 1.414L20 5.414V9a1 1 0 0 0 2 0V3a.995.995 0 0 0-.292-.706l-.002-.002A.996.996 0 0 0 21 2h-6a1 1 0 0 0 0 2zM5.414 20l5.293-5.293a.999.999 0 1 0-1.414-1.414L4 18.586V15a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2z" />
    </svg>
  );
}
export default SvgMaximize2;
