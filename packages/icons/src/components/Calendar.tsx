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
function SvgCalendar({
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
      <path d="M7 2v1H5a2.997 2.997 0 0 0-3 3v14a2.997 2.997 0 0 0 3 3h14a2.997 2.997 0 0 0 3-3V6a2.997 2.997 0 0 0-3-3h-2V2a1 1 0 0 0-2 0v1H9V2a1 1 0 0 0-2 0zm13 7H4V6c0-.276.111-.525.293-.707S4.724 5 5 5h2v1a1 1 0 0 0 2 0V5h6v1a1 1 0 0 0 2 0V5h2c.276 0 .525.111.707.293S20 5.724 20 6zM4 11h16v9c0 .276-.111.525-.293.707S19.276 21 19 21H5c-.276 0-.525-.111-.707-.293S4 20.276 4 20z" />
    </svg>
  );
}
export default SvgCalendar;
