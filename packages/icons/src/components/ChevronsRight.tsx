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
function SvgChevronsRight({
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
      <path d="m13.707 17.707 5-5a.999.999 0 0 0 0-1.414l-5-5a.999.999 0 1 0-1.414 1.414L16.586 12l-4.293 4.293a.999.999 0 1 0 1.414 1.414zm-7 0 5-5a.999.999 0 0 0 0-1.414l-5-5a.999.999 0 1 0-1.414 1.414L9.586 12l-4.293 4.293a.999.999 0 1 0 1.414 1.414z" />
    </svg>
  );
}
export default SvgChevronsRight;
