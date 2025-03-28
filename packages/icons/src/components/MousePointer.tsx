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
function SvgMousePointer({
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
      <path d="m4.857 4.857 12.284 5.118-4.883 1.658a.998.998 0 0 0-.625.625l-1.658 4.883zm8.153 9.567 5.283 5.283a.999.999 0 1 0 1.414-1.414l-5.283-5.283 5.868-1.993a1 1 0 0 0 .063-1.869l-16.97-7.07a1 1 0 0 0-1.308 1.308l7.07 16.97a1 1 0 0 0 1.87-.062z" />
    </svg>
  );
}
export default SvgMousePointer;
