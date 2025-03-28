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
function SvgBattery({
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
      <path d="M3 5a2.997 2.997 0 0 0-3 3v8a2.997 2.997 0 0 0 3 3h14a2.997 2.997 0 0 0 3-3V8a2.997 2.997 0 0 0-3-3zm0 2h14c.276 0 .525.111.707.293S18 7.724 18 8v8c0 .276-.111.525-.293.707S17.276 17 17 17H3c-.276 0-.525-.111-.707-.293S2 16.276 2 16V8c0-.276.111-.525.293-.707S2.724 7 3 7zm21 6v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0z" />
    </svg>
  );
}
export default SvgBattery;
