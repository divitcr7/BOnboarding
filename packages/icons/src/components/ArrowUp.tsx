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
function SvgArrowUp({
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
      <path d="M5.707 12.707 11 7.414V19a1 1 0 0 0 2 0V7.414l5.293 5.293a.999.999 0 1 0 1.414-1.414l-7-7A1.008 1.008 0 0 0 12 4a.997.997 0 0 0-.707.293l-7 7a.999.999 0 1 0 1.414 1.414z" />
    </svg>
  );
}
export default SvgArrowUp;
