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
function SvgBatteryCharging({
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
      <path d="M5 17H3c-.276 0-.525-.111-.707-.293S2 16.276 2 16V8c0-.276.111-.525.293-.707S2.724 7 3 7h3.19a1 1 0 0 0 0-2H3a2.997 2.997 0 0 0-3 3v8a2.997 2.997 0 0 0 3 3h2a1 1 0 0 0 0-2zM15 7h2c.276 0 .525.111.707.293S18 7.724 18 8v8c0 .276-.111.525-.293.707S17.276 17 17 17h-3.19a1 1 0 0 0 0 2H17a2.997 2.997 0 0 0 3-3V8a2.997 2.997 0 0 0-3-3h-2a1 1 0 0 0 0 2zm9 6v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM10.168 5.445l-4 6A1.001 1.001 0 0 0 7 13h4.131l-2.964 4.445a1.001 1.001 0 0 0 1.664 1.11l4-6A1 1 0 0 0 13 11H8.869l2.964-4.445a1.001 1.001 0 0 0-1.664-1.11z" />
    </svg>
  );
}
export default SvgBatteryCharging;
