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
function SvgChevronsDown({
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
      <path d="m6.293 13.707 5 5a.999.999 0 0 0 1.414 0l5-5a.999.999 0 1 0-1.414-1.414L12 16.586l-4.293-4.293a.999.999 0 1 0-1.414 1.414zm0-7 5 5a.999.999 0 0 0 1.414 0l5-5a.999.999 0 1 0-1.414-1.414L12 9.586 7.707 5.293a.999.999 0 1 0-1.414 1.414z" />
    </svg>
  );
}
export default SvgChevronsDown;
